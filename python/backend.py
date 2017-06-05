import json
from flask import Flask, request, Response, jsonify
import requests
app = Flask(__name__)

app.config['NODE_PROXY'] = 'http://localhost:88'


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

    with open('rsvps.json', 'a') as f:
        f.write(json.dumps(parsed) + '\n')
        #f.write('%s\t%s\t%s\t%s\t%s\t%s\t%s\n' % (firstName, lastName, coming, foodpref, allergies, kids, kidsmeals))
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


@app.route('/')
@app.route('/crew')
@app.route('/when')
@app.route('/registry')
@app.route('/rsvp')
def render_html(filename='', cache_key=''):
    return render_file('index.html')

if __name__ == "__main__":
    app.run(port=80, host='0.0.0.0')
