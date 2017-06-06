import arrow
import json
from flask import Flask, request, Response, jsonify, render_template_string
import requests
import os

app = Flask(__name__)

app.config['NODE_PROXY'] = 'http://localhost:89'
if 'NODE_PROXY' in os.environ:
    app.config['NODE_PROXY'] = os.environ['NODE_PROXY']

app.config['RSVP_FILE'] = 'rsvps.json'
if 'RSVP_FILE' in os.environ:
    app.config['RSVP_FILE'] = os.environ['RSVP_FILE']

Row = 'firstName, lastName, coming, foodpref, created, kids, kidsmeals, allergies'


@app.route("/see-all-rsvps")
def see_all_rsvps():
    rsvps = []
    attending = 0
    beef = 0
    salmon = 0
    vegetarian = 0
    with open(app.config['RSVP_FILE'], 'r') as f:
        for line in f:
            rsvp = json.loads(line.strip())
            row = [rsvp[col] for col in Row.split(', ')]
            rsvps.append(row)
            if rsvp['coming'] == 'yes':
                attending += 1
            if rsvp['foodpref'] == 'beef':
                beef += 1
            elif rsvp['foodpref'] == 'salmon':
                salmon += 1
            elif rsvp['foodpref'] == 'vegetarian':
                vegetarian += 1

    template = '''
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" type="image/x-icon">
    <!--
      Notice the use of %PUBLIC_URL% in the tag above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->
    <!-- Latest compiled and minified CSS -->
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
    <link href='//fonts.googleapis.com/css?family=Overpass' rel='stylesheet'>
    <title>Tina and Hsu Han's Wedding Extravaganza</title>
  </head>
  <body>
    <div class="container">
      <h1>Viewing RSVP's for the Wedding</h1>
      <div style="margin-top: 20px; margin-bottom: 20px;">
          <p><b>Current attending (not including children): {{attending}}</b></p>
          <p><b>Beef Entrees: {{beef}}</b></p>
          <p><b>Salmon Entrees: {{salmon}}</b></p>
          <p><b>Vegatarian Entrees: {{vegetarian}}</b></p>
      </div>
      <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          {% for col_name in columns.split(', ') %}
          <th>
            {{col_name}}
          </th>
          {% endfor %}
        </tr>
      </thead>
      <tbody>
      {% for idx, row in enumerate(rsvps) %}
        <tr>
          <td>{{idx + 1}}</td>
        {% for col in row %}
          <td>{{col}}</td>
        {% endfor %}
        </tr>
      {% endfor %}
      </tbody>
      </table>
    </div>
  </body>
</html>
'''
    newest = sorted(rsvps, key=lambda x: x[4], reverse=True)
    return render_template_string(template, rsvps=newest, columns=Row, enumerate=enumerate, attending=attending, beef=beef, salmon=salmon, vegetarian=vegetarian)


@app.route("/rsvpConfirm", methods=['POST'])
def rsvp():
    parsed = request.get_json()
    firstName = parsed['firstName'].strip()
    lastName = parsed['lastName'].strip()
    coming = None
    foodprefRadio = None
    if 'coming' in parsed:
        coming = parsed['coming']
    if 'foodpref' in parsed:
        foodpref = parsed['foodpref']
    allergies = parsed['allergies'].strip()
    kids = parsed['kids'].strip()
    kidsmeals = parsed['kidsmeals'].strip()

    errors = []
    if not firstName:
        errors.append("First name can't be blank or empty.")

    if not lastName:
        errors.append("Last name can't be blank or empty.")

    if not coming:
        errors.append("Please let us know if you're coming.")

    if coming == 'yes' and not foodpref:
        errors.append("Please select a food preference.")

    if len(errors) > 0:
        return jsonify({'errors': errors}), 400, {'Content-Type': 'application/json; charset=utf-8'}

    with open(app.config['RSVP_FILE'], 'a') as f:
        utc = arrow.utcnow()
        local = utc.to('US/Pacific')
        parsed['created'] = local.strftime('%Y-%m-%dT%H:%M:%S')
        f.write(json.dumps(parsed) + '\n')
        # f.write('%s\t%s\t%s\t%s\t%s\t%s\t%s\n' % (firstName, lastName, coming, foodpref, allergies, kids, kidsmeals))
    return 'Confirmed'


def render_file(filename='index.html'):
    """
    Serve a static file (filename).

    When running in development mode, all requests are proxied to the service running at
    `NODE_PROXY`.

    :param filename:
    :return:
    """
    if app.config['NODE_PROXY']:
        req = requests.get(app.config['NODE_PROXY'] + '/' + filename)
        return Response(req.content, content_type=req.headers['content-type'])
    else:
        logging.info('Serving static file: %s', app.static_folder + filename)
        return flask.send_from_directory(app.static_folder, filename)


@app.route('/static/js/<string:filename>')
@app.route('/static/css/<string:filename>')
@app.route('/static/media/<string:filename>')
def render_static(filename):
    render_path = request.path[1:]
    return render_file(render_path)


@app.route('/favicon.ico')
def render_favicon():
    return render_file('favicon.ico')


@app.route('/')
@app.route('/crew')
@app.route('/when')
@app.route('/registry')
@app.route('/rsvp')
@app.route('/accommodations')
@app.route('/activities')
def render_html(filename='', cache_key=''):
    return render_file('index.html')

if __name__ == "__main__":
    port = os.environ['PORT'] or 5000
    print('trying to bind port:' + port)
    app.run(port=port, host='0.0.0.0')
