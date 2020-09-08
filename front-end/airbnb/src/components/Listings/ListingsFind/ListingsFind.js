/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { ReactiveBase, DataSearch, NumberBox, DateRange, RangeSlider, SingleRange, MultiList} from "@appbaseio/reactivesearch";
import './ListingsFind.css'
import { ReactiveGoogleMap } from "@appbaseio/reactivemaps";
// import Search from '../../Search/Search';
// import OpenStreetMap from '../../components/Map/OpenStreetMap'


class ListingsFind extends Component {
  onPopoverClick = function(data) {
    return (
      <div className="popover">
        <div className="image-container">
          <img src={data.image} alt={data.name} height="185" width="263" />
        </div>
        <div className="extra-info-container">
          <div className="type-container info">
            {data.room_type}-{data.beds} bed
          </div>
          <div className="name-container info">{data.name}</div>
          <div className="price-container info">
            ${data.price} per night-Free cancellation
          </div>
        </div>
      </div>
    );
  };
  
  render() {
    return (
      <div className="main-container">
        <ReactiveBase
          app="airbeds-test-app"
          credentials="X8RsOu0Lp:9b4fe1a4-58c6-4089-a042-505d86d9da30"
          type="listing"
          theme={{
            colors: {
              primaryColor: "#41ABF5"
            }
          }}
        >
        <div className="filters-search-container">
          <div className="filter-container">
            <div className="dropdown">
              <button className="button">Price</button>
              <div className="dropdown-content">
                <RangeSlider
                  componentId="PriceSensor"
                  dataField="price"
                  title="Price Range"
                  range={{
                    start: 10,
                    end: 250
                  }}
                  rangeLabels={{
                    start: "$10",
                    end: "$250"
                  }}
                  defaultValue={{
                    start: 10,
                    end: 50
                  }}
                  stepValue={10}
                  interval={20}
                  react={{
                    and: ["DateRangeSensor", "GuestSensor"]
                  }}
                  className="rangeFilter"
                />
              </div>
            </div>
            <div className="dropdown">
              <button className="button">Guests</button>
              <div className="dropdown-content-guest">
                <NumberBox
                  componentId="GuestSensor"
                  dataField="accommodates"
                  title="Guests"
                  defaultValue={2}
                  labelPosition="right"
                  data={{
                    start: 1,
                    end: 16
                  }}
                  className="numberFilter"
                />
              </div>
            </div>

            <div className="dropdown">
              <button className="button ">When</button>
              <div className="dropdown-content">
                <DateRange
                  dataField="date_from"
                  componentId="DateRangeSensor"
                  title="When"
                  numberOfMonths={2}
                  queryFormat="basic_date"
                  initialMonth={new Date("08/01/2020")}
                  className="dateFilter"
                />
              </div>
            </div>

            <div className="dropdown">
              <button className="button ">Extras</button>
              <div className="dropdown-content">
                <MultiList
                  componentId="CitySensor"
                  dataField="group_city.raw"
                  title="Cities"
                  size={100}
                  sortBy="asc"
                  defaultValue={["San Francisco"]}
                  queryFormat="or"
                  selectAllLabel="All Cities"
                  showCheckbox={true}
                  showCount={true}
                  showSearch={true}
                  placeholder="Search City"
                  react={{
                      and: ["CategoryFilter", "SearchFilter"]
                  }}
                  showFilter={true}
                  filterLabel="City"
                  URLParams={false}
                  loader="Loading ..."
                />
              </div>
            </div>

            <div className="dropdown">
              <button className="button ">Filter by</button>
              <div className="dropdown-content">
                <SingleRange
                  componentId="ratingsfilter"
                  title="Filter by ratings"
                  dataField="rating"
                  data={[
                    {"start": "4", "end": "5", "label": "4 stars and up"},
                    {"start": "3", "end": "5", "label": "3 stars and up"},
                    {"start": "2", "end": "5", "label": "2 stars and up"},
                    {"start": "1", "end": "5", "label": "see all ratings"},
                  ]}
                  defaultValue="4 stars and up"
                  style={{
                    padding: "5px",
                    marginTop: "10px"
                  }}
							  />
              </div>
            </div>

          </div>

          <div className="search-container">
            <DataSearch
              componentId="search"
              dataField="name"
              autosuggest={true}
              placeholder="Search listings..."
              iconPosition="left"
              className="search"
            />
          </div>
        </div>

          <div className="result-map-container">
            <ReactiveGoogleMap
              componentId="map"
              dataField="location"
              defaultZoom={13}
              pagination
              onPageChange={() => {
                window.scrollTo(0, 0);
              }}
              style={{
                width: "calc(100% - 280px)",
                height: "calc(100vh - 52px)"
              }}
              onPopoverClick={this.onPopoverClick}
              className="rightCol"
              showMarkerClusters={false}
              showSearchAsMove={false}
              innerClass={{
                label: "label"
              }}
              renderAllData={(
                hits,
                streamHits,
                loadMore,
                renderMap,
                renderPagination) => (
                  <div style={{ display: "flex" }}>
                    <div>
                      <div className="card-container">
                        {hits.map(data => (
                          <div key={data._id} className="card">
                            <div
                              className="card__image"
                              style={{ backgroundImage: `url(${data.image})` }}
                              alt={data.name}
                            />
                            <div>
                              <h2>{data.name}</h2>
                              <div className="card__price">${data.price}</div>
                              <p className="card__info">
                                {data.room_type} · {data.accommodates} guests
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div>{renderPagination()}</div>
                    </div>
                    <div 
                      className="map-container">{renderMap()}
                    </div>
                  </div>
               )}
              renderData={data => ({
                label: (
                  <div
                    className="marker"
                    style={{
                      width: 40,
                      display: "block",
                      textAlign: "center"
                    }}
                  >
                    <div 
                      className="extra-info">{data.name}
                    </div>
                    ${data.price}
                  </div>
                )
              })}
              react={{
                and: ["GuestSensor", "PriceSensor", "DateRangeSensor", "Extras", "Filters" , "search"]
              }}
            />
          </div>
        </ReactiveBase>
      </div>
    );
  }
}
 
export default ListingsFind;