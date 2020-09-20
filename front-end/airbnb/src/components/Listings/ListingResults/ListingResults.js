import React, { Component } from "react";
import ResultsList from './ResultsList';
import Loading from '../../Loading/Loading';

class ListingResults extends Component {
  render(){
    const {content} = this.props.location.state;
    const guests = this.props.location.state.guests
    const loading = this.props.location.state.loading

    if(loading) {
      return <Loading />
    }
    
    return (
      <div className="container" style={{width: '100%', padding: '5%', backgroundColor: '#ccc', boxShadow: '5px 5px #888888'}}>
        <h2 style={{textAlign: 'center', color: 'red'}}>Total {' '} {content.length} {' '} results</h2>
        <ResultsList listings={content} guests={guests} loading={loading} />
      </div>
    )
  }
}

export default ListingResults;