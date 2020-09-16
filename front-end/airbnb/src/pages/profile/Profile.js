import React, { Component } from "react";
import UserService from "../../_services/user.service";

class Profile extends Component {
  constructor(props) {
    super();

    this.state = {
      content: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    UserService.getProfile()
    .then(
      response => {
        this.setState({
          content: response,
          loading: false
        });
      }
    )
    .catch(
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );  
  }

  render() {
    if (this.state.loading){
      return <h2>Loading...</h2>
    }
    return (
      <React.Fragment>
        <div className="container" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9'}}>

          <div className="profile-content">
            <ul style={{display: 'inline-block'}}>
              <li><h1>My profile</h1></li>
              <li><h3>Username: {this.state.content.username}</h3></li>
              <li><h3>First Name: {this.state.content.firstName}</h3></li>
              <li><h3>Last Name: {this.state.content.lastName}</h3></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;