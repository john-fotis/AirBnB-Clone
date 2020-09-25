import React, { Component } from 'react';
import UserService from '../../_services/user.service';

class HostMessageReply extends Component {
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

    const message = this.props.location.state;

    if(this.state.text){
      UserService.chatFromHost(
        this.state.text,
        message.listingId,
        message.guestId
      ).then(response => {
        if(response.status === 200){
          UserService.hostMessageSeen(message.id).then(
            response=> {
              if(response.status === 200) {
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
            }
          )
        }
      }).catch(error => {
        const resMessage =
            (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString();
  
          this.setState({
            message: resMessage
          });
      })
    }
    else {
      this.setState({
        succesfull: false,
        message: 'Please type first'
      });
    }
  }

  render() { 
    const message = this.props.location.state;

    return ( 
      <div style={{backgroundColor: 'white', width: '40%', height: '55%', position: 'absolute', top: '20%', left: '30%', borderRadius: '15px', padding: '5%', textAlign: 'center' }}>
        <p style={{fontSize: '15px', width: '100%'}}>
          On {message.date}, {' '} {message.guestName} {' '} wrote:
          </p>
        <p style={{border: 'solid 2px red', width: '100%'}}>
          {message.text}
        </p>
        <label>Reply:</label>
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
 
export default HostMessageReply;