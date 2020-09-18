import React, { Component } from "react";
import ResultsList from './ResultsList';

class ListingResults extends Component {

  render(){
    const {content} = this.props.location.state;
    const guests = this.props.location.state.guests
    const loading = this.props.location.state.loading
    
    
    return (
      <div className="container" style={{width: '100%', padding: '5%', backgroundColor: '#ccc'}}>
        <ResultsList listings={content} guests={guests} loading={loading} />
      </div>
    )
  }
}

export default ListingResults;