import React, { Component } from 'react';
import UserService from '../../_services/user.service';
import HostMessageList from './HostMessageList';
import Pagination from '../Pagination/Pagination';

class HostMessages extends Component {
  constructor(props) {
    super();

    this.state = {
      messages: [],
      currentPage: 1,
      messagesPerPage: 10,
      loading: false
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    const listingId = this.props.location.state.listingId;

    UserService.getHostMessages(listingId)
    .then(
      response => {
        this.setState({
          messages: response.data,
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
    const messages = this.state.messages;
    const indexOfLastMessage = this.state.currentPage * this.state.messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - this.state.messagesPerPage;
    const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);
  
    const paginate = (pageNumber) => {
      this.setState({
        currentPage: pageNumber
      });
    }

    return (
      <React.Fragment>
        <main className="container" 
          style={{width: '100%', padding: '5%', marginTop: '10%',
          backgroundColor: '#ff9', border: 'solid 3px purple', textAlign: 'center'}}>
          <h2>Messages:</h2>
          <h5>(Latest first)</h5>
          <HostMessageList messages={currentMessages} loading={this.state.loading} onClick = {this.onClick} />
          <Pagination resultsPerPage = {this.state.messagesPerPage} totalResults = {messages.length} paginate = {paginate} currentPage = {this.state.currentPage} />
        </main>
      </React.Fragment>
    );
  }
}
 
export default HostMessages;