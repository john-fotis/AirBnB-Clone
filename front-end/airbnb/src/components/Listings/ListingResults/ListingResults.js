/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from "react";
import ResultsList from './ResultsList';

class ListingResults extends Component {
  state = {
    content: [],
    guests: null,
    loading: false,
    message: ''
  }

  componentDidMount(){
    this.state.content = this.props.location.state.content
    this.state.guests = this.props.location.state.guests
    this.state.loading = this.props.location.state.loading
  }

  render(){
    return (
      <div className="container" style={{width: '100%', padding: '5%', backgroundColor: '#ccc'}}>
        <ResultsList listings={this.state.content} guests={this.state.guests} loading={false} />
      </div>
    )
  }
}

export default ListingResults;