import React, { Component } from 'react';
import UserService from '../../_services/user.service';

class ExtractApplicationData extends Component {
  constructor(props){
    super();

    this.state = { 
      data: undefined,
      successful: false
    }

    this.extractJson = this.extractJson.bind(this);
    this.downloadData = this.downloadData.bind(this);

  }

  extractJson = () => {
    UserService.adminExtractEverything()
    .then(response=>{
      this.setState({
        data: JSON.parse(JSON.stringify(response.data))
      })
    })
  }

  downloadData = () => {
    // const fileDownload = require('js-file-download')
    // fileDownload(this.state.data, 'ApplicationData.json')
    console.log(this.state.data.usersList)
  }
 
  render() { 
    return ( 
      <div className="container">
        <div className="form-inner">
          <button onClick={this.extractJson}                            
            className="submit-button btn btn-primary btn-block"
            style={{width:'30%'}}
            >Extract JSON
          </button>
          {this.state.data &&(
            <div>
              <h3>Extract Succesfull!</h3>
                <button onClick={this.downloadData}                            
                className="submit-button btn btn-primary btn-block"
                style={{width:'30%'}}
                >Download
              </button>
            </div>
          )}
        </div>
      </div>
     );
  }
}
 
export default ExtractApplicationData;