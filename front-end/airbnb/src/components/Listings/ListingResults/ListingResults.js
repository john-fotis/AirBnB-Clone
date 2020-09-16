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
    console.log(this.state.content)
  }

  render(){
    return (
      <div className="container" style={{width: '100%', padding: '5%', backgroundColor: '#ffe'}}>
        <ResultsList listings={this.state.content} guests={this.state.guests} loading={this.state.loading} />
      </div>
    )
  }
}

export default ListingResults;