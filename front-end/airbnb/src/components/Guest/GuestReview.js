import React, { Component } from 'react';
import AuthService from '../../_services/authentication.service';
import UserService from '../../_services/user.service';

class GuestReview extends Component {
  constructor(props){
    super();

    this.state = { 
      comment: '',
      rating: null,
      listingId: null,
      succesfull: false,
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRate = this.handleRate.bind(this);

  }

  handleRate = e => {
    this.setState({
      rating: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();

    
    if(this.state.comment){
      if(this.state.rating){
        const listingId = this.props.location.state.booking.listingId;

        UserService.guestReview(
          this.state.comment,
          this.state.rating,
          listingId,
          AuthService.getCurrentUser().id
        ).then(response => {
          if(response.status === 200){
            this.setState({
              succesfull: true,
              message: 'Your rating has been submitted!'
            });
            this.setState({comment: ''});
            setTimeout(() => this.setState({
              succesfull: false,
              message: ''
            }), 3000);
          }
        });
      }
      else {
        this.setState({
          succesfull: false,
          message: 'Please select a rating'
        })
      }
    }
    else {
      this.setState({
        succesfull: false,
        message: 'Please type first'
      })
    }
  }

  render() { 
    return ( 
      <div style={{backgroundColor: 'white', width: '40%', height: '55%', position: 'absolute', top: '20%', left: '30%', borderRadius: '15px', padding: '5%', textAlign: 'center' }}>
        <label>Comment</label>
        <textarea
          style={{fontSize: '20px', border: 'solid 3px purple', margin: '5% 0%'}}
          type="text"
          className="form-control"
          name="text"
          value={this.state.comment}
          onChange={ e => {
            this.setState({
              comment: e.target.value
            });
          }}
        />
        <div 
          style = {{display: 'flex', marginTop: '10px', width: '100%'}}>
          <p style = {{marginTop: '0%'}}>Rating</p>
          <div
            style = {{display: 'flex', width: '65%' }}
            onClick = {this.handleRate}>
            <input type="radio" name="rating" value="1" />
            <label htmlFor="rating1">1</label>
            <input type="radio" name="rating" value="2" />
            <label htmlFor="rating2">2</label>
            <input type="radio" name="rating" value="3" />
            <label htmlFor="rating3">3</label>
            <input type="radio" name="rating" value="4" />
            <label htmlFor="rating4">4</label>
            <input type="radio" name="rating" value="5" />
            <label htmlFor="rating5">5</label>
          </div>
        </div>
        <button 
          style = {{marginTop: '42px', width: '30%', margin: 'auto'}} 
          type = "submit" 
          className="submit-button btn btn-primary btn-block"
          onClick = {this.handleSubmit}>
            Submit
        </button>

        {this.state.succesfull && (
          <div className="form-field">
            <div
              className={
                this.state.successful
                  ? "alert alert-success"
                  : "alert alert-primary"
              }
              role="alert"
              style={{textAlign: 'center', margin: '0% auto', width: '60%'}}
            >
              {this.state.message}
            </div>
          </div>
        )}

        {this.state.message && !this.state.succesfull && (
          <div className="form-field">
            <div
              className={
                this.state.successful
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
              role="alert"
              style={{textAlign: 'center', margin: '0% auto', width: '60%'}}
            >
              {this.state.message}
            </div>
          </div>
        )}
      </div>
     );
  }
}
 
export default GuestReview;