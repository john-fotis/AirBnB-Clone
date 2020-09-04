/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider, SingleRange, MultiList} from "@appbaseio/reactivesearch";
import './Search.css';


class Search extends Component {
  // state = {  }
  render() { 
    return ( 
      <ReactiveBase
      app="airbeds-test-app"
      credentials="X8RsOu0Lp:9b4fe1a4-58c6-4089-a042-505d86d9da30"
      type="listing"
      theme={{
        colors: {
          primaryColor: "#41ABF5"
        }
      }}>

      </ReactiveBase>
    );
  }
}
 
export default Search;