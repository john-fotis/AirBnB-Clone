import React, { Component } from 'react';
import AuthService from '../../_services/authentication.service';
import UserService from '../../_services/user.service';

class GuestChat extends Component {
  constructor(props){
    super();

    this.state = { 
      text: undefined,
      succesfull: false,
      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit = e => {
    e.preventDefault();

    if(this.state.text){
      const listingId = this.props.location.state.listingId;

      UserService.chatFromGuest(
        this.state.text,
        listingId,
        AuthService.getCurrentUser().id
      ).then(response => {
        if(response.status === 200){
          this.setState({
            succesfull: true,
            message: 'Your message has been sent'
          });
          this.setState({text: ''});
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
        message: 'Please type first'
      })
    }
  }

  render() { 
    return ( 
      <div style={{backgroundColor: 'white', width: '40%', height: '42%', position: 'absolute', top: '20%', left: '30%', borderRadius: '15px', padding: '5%', textAlign: 'center' }}>
        <label>Chat with host</label>
        <textarea
          style={{fontSize: '20px', border: 'solid 3px purple', margin: '5% 0%'}}
          type="text"
          className="form-control"
          name="text"
          value={this.state.text}
          onChange={ e => {
            this.setState({
              text: e.target.value
            });
          }}
        />
        <button 
          style = {{marginTop: '42px', width: '30%', margin: 'auto'}} 
          type = "submit" 
          className="submit-button btn btn-primary btn-block"
          onClick = {this.handleSubmit}>
            Send
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
 
export default GuestChat;