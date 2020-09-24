import React, {Component} from 'react';
import UserService from '../../_services/user.service'

class ReviewOverview extends Component {
  state = {
    review: {},
    message: ''
  }

  componentDidMount(){
    const {reviewId} = this.props.location.state;
    UserService.getReviewById(reviewId)
    .then(response=>{
      this.setState({
        review: response
      });
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
      <div className="review-overview-admin" style={{width: '100%', padding: '5%', margin: '5% 0%', backgroundColor: '#ff9'}}>
        <ul style = {{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
          <li><h2>{this.state.review.comment}</h2></li>
          <li><h4><strong>By: {this.state.review.userName}</strong></h4></li>
          <li><h4>On: {this.state.review.date}</h4></li>
          <li><h4>Listing ID: {this.state.review.listingId}</h4></li>
        </ul>
      </div>
    )
  }
}

export default ReviewOverview;