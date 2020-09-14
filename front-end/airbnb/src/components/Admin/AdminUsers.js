import React, { Component } from "react";
import UsersList from "./UsersList";

import UserService from "../../_services/user.service";

class AdminUsers extends Component {
  constructor(props) {
    super();

    this.state = {
      content: [],
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true})
    this.setState({loading: true})
    UserService.getUsers()
    .then(
      response => {
        this.setState({
          content: response.data,
          loading: false
        });
        console.log(response.data)
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
    return (
      <div className="container">
        <main className="container" style={{width: '100%', padding: '5%', marginTop: '10%', backgroundColor: '#ff9'}}>
          <h2>Admin Board - Users</h2>
          <UsersList users={this.state.content} loading={this.state.loading}/>
        </main>
      </div>
    );
  }
}

export default AdminUsers;