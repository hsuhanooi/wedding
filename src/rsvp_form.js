import React from 'react';
import request from 'superagent'

function Confirmation(props) {
  const showSuccess = props.showSuccess;
  if (showSuccess) {
    return <div className="form-dialog has-success">Your RSVP has been received. Thank you.</div>;
  }
  return null;
}

function ErrorDialog(props) {
  const errors = props.showErrors;
  if (errors) {
    var lis = errors.map(function(error) {
      return <li key={error}>{error}</li>
    });
    console.log(lis)
    return <div className="form-dialog has-danger"><ul className="errors">{lis}</ul></div>;
  }
  return null;
}


class RsvpForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleComingChange = this.handleComingChange.bind(this);
    this.handleFoodprefChange = this.handleFoodprefChange.bind(this);
    this.state = {
      coming: '',
      foodpref: '',
      showSuccess: false,
      showErrors: false
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    var self = this;
    this.setState({showSuccess: false, showErrors: false})
    request
      .post('/rsvpConfirm')
      .send({ 
        firstName: this.firstName.value, 
        lastName: this.lastName.value,
        coming: this.state.coming,
        foodpref: this.state.foodpref,
        kids: this.kids.value,
        kidsmeals: this.kidsmeals.value,
        allergies: this.allergies.value
      }) // sends a JSON post body
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (res.statusCode === 200) {
          self.setState({showSuccess: true})
        } else {
          self.setState({showErrors: res.body.errors})
        }
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  handleComingChange(changeEvent) {
    this.setState({
      coming: changeEvent.target.value
    });
  }


  handleFoodprefChange(changeEvent) {
    this.setState({
      foodpref: changeEvent.target.value
    });
  }

  render() {
    return (
      <div>
        <Confirmation showSuccess={this.state.showSuccess} />
        <ErrorDialog showErrors={this.state.showErrors} />
        <form onSubmit={this.handleSubmit} action='/rsvp' method='post'>

          <div className="row">
            <div className="flex">

              <div className="col-md-6">
                <div className="form-group first-name">
                   <label for="first-name">First name</label>
                  <input type="text" name="firstName" ref={(firstName) => this.firstName = firstName} className="form-control input-name" id="first-name"/>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label for="last-name">Last name</label>
                  <input type="text" name="lastName" ref={(lastName) => this.lastName = lastName} className="form-control" id="last-name" />
                </div>
              </div>

            </div>
          </div>

          <br/>

          <div className="row">

            <div className="respond">
              <div className="col-md-6">
                <fieldset className="form-group">
                  <label className="label-coming">Will you be attending? *</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="comingRadio" id="comingyes" value="yes" onChange={this.handleComingChange} checked={this.state.coming === 'yes'}/>
                      &nbsp;Yes
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="comingRadio" id="comingno" value="no" onChange={this.handleComingChange} checked={this.state.coming === 'no'}/>
                      &nbsp;No
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="foodpref">
              <div className="col-md-6">
                <fieldset className="form-group">
                  <label className="label-foodpref">If attending, please select an entree *</label>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="foodprefRadio" id="foodprefsalmon" value="salmon" onChange={this.handleFoodprefChange} checked={this.state.foodpref === 'salmon'}/>
                      &nbsp;Salmon
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="foodprefRadio" id="foodprefbeef" value="beef" onChange={this.handleFoodprefChange} checked={this.state.foodpref === 'beef'}/>
                      &nbsp;Beef
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input type="radio" className="form-check-input" name="foodprefRadio" id="foodprefVeg" value="vegetarian" onChange={this.handleFoodprefChange} checked={this.state.foodpref === 'vegetarian'}/>
                      &nbsp;Vegetarian
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

          </div>

          <br/>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group allergies">
                <label className="label-allergies">Do you have any food allergies we should be aware of?</label>
                <textarea name="allergies" className="form-control" ref={(allergies) => this.allergies = allergies} id="textareaallergies" rows="3"></textarea>
              </div>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group kids">
                <label className="label-kids">Please list the name of children and babies in attendance</label>
                <input type="text" className="form-control" ref={(kids) => this.kids = kids} name="kids" id="textkids" />
                <small id="kidsmealhelp" className="form-text text-muted">See FAQ below before entering.</small>
              </div>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label className="label-kidsmeals">We are offering kids' meals for children under 12. Please enter the number of kids' meals you would like:</label>
                <input type="text" className="form-control" ref={(kidsmeals) => this.kidsmeals = kidsmeals} name="kidsmeals" id="textkidsmeals" />
                <small id="kidsmealhelp" className="form-text text-muted">For children 12 or older, please RSVP for them separately to select meal preferences.</small>
              </div>
            </div>
          </div>

          <button type="submit" disabled={this.state.showSuccess} className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default RsvpForm;
