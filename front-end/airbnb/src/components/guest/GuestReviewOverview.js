import React, {Component} from 'react';
import UserService from '../../_services/user.service'

class GuestReviewOverview extends Component {
  state = {
    review: {},
    message: ''
  }

  componentDidMount(){
    const {reviewId} = this.props.location.state;
    UserService.getCurrentReview(reviewId)
    .then(response=>{
      this.setState({
        review: response
      });
      console.log(this.state.review)
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
      <div className="user-view-admin" style={{width: '100%', padding: '5% 15%', marginTop: '10%', backgroundColor: '#ff9'}}>
        {/* <div style={{position: 'absolute', right: '15%'}}><img src={this.state.image} alt='img' /></div>
        <ul style = {{display: 'flex', flexDirection: 'column'}}>
          <li><h2>Username: {this.state.user.username} </h2></li>
          <li><h4><strong>ID: {this.state.user.id}</strong></h4></li>
          <li><h4>Rest data:</h4></li>
          <li>First name: {this.state.user.firstName}</li>
          <li>Last name: {this.state.user.lastName} </li>
          <li>E-mail: {this.state.user.email} </li>
          <li>Phone number: {this.state.user.number}</li>
        </ul> */}
      </div>
    )
  }
}

export default GuestReviewOverview;