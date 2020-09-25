import React, {Component} from 'react';
import UserService from '../../_services/user.service'

class UserProfile extends Component {
  state = {
    user: {},
    image: '',
    message: ''
  }

  handleApprove = () => {
    UserService.approveHost(this.state.user.id)
    .then( response => {
      if(response.status === 200){
        var user = this.state.user;
        user.approved = true;
        this.setState({
          user: user
        });
      }
    });
  }

  componentDidMount(){
    const {userId} = this.props.location.state;
    UserService.getAllUserInfo(userId)
    .then(response=>{
      this.setState({
        user: response.data
      });
      if(response.data.image){
        this.setState({
          image: 'data:image/jpg;base64,' + response.data.image.picByte
        })
      }
    })
    .catch(
      error => {
        const resMessage =
          (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          successful: false,
          message: resMessage
        });
      }
    )
  }

  render(){
    return (
      <div className="user-view-admin" style={{width: '100%', padding: '5% 15%', margin: '5% 0%', backgroundColor: '#ff9'}}>
        <div style={{position: 'absolute', right: '15%'}}>
          {this.state.image && (
              <img src={this.state.image} alt='img' style={{width: '250px', height: '250px'}}/>
          )}
          {!this.state.image &&(
              <img src={require('../../images/profile-picture.jpg')} alt='default-avatar'/>
          )}
        </div>
        <ul style = {{width: '50%', display: 'inline-block', textAlign: 'left'}}>
          <li><h2>Username: {this.state.user.username} </h2></li>
          <li><h3><strong>ID: {this.state.user.id}</strong></h3></li>
          <li><h4><br />Rest data:</h4></li>
          <li>First name: {this.state.user.firstName}</li>
          <li>Last name: {this.state.user.lastName} </li>
          <li>E-mail: {this.state.user.email} </li>
          <li>Phone number: {this.state.user.number}</li>
        </ul>
        {this.state.user.approved === false && (
          <button 
            style = {{marginTop: '5%', marginLeft: 'auto',
            marginRight: 'auto', width: '40%', height: '45px'}} 
            type = "submit" 
            className="submit-button btn btn-primary btn-block"
            onClick = {this.handleApprove}>
            Approve Host
        </button>
        )}
      </div>
    )
  }
}

export default UserProfile;