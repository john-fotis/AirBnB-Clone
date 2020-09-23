import React, { Component } from 'react';
import UserService from '../../_services/user.service';
import 'file-system';
import 'xml-js';

class ExtractApplicationData extends Component {
  constructor(props){
    super();

    this.state = { 
      data: undefined,
      successful: false
    }

    this.extractData = this.extractData.bind(this);
    this.downloadJson = this.downloadJson.bind(this);
    this.downloadXML = this.downloadXML.bind(this);

  }

  extractData = () => {
    UserService.adminExtractEverything()
    .then(response=>{
      this.setState({
        data: JSON.parse(JSON.stringify(response.data))
      })
    })
  }

  downloadXML = () => {
    var convert = require('xml-js');
    var json = this.state.data;
    var options = {compact: true, ignoreComment: true, spaces: 4};
    var xmlContent = convert.json2xml(json, options);

    var pom = document.createElement('a');
    var filename = "ApplicationData.xml";
    var bb = new Blob([xmlContent], {type: 'text/plain'});
    
    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);
    
    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true; 
    pom.classList.add('dragout');
    
    pom.click();
  }

  downloadJson = () => {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(this.state.data, null, 2)], {
      type: "text/json;charset=utf-8"
    }));
    a.setAttribute("download", "ApplicationData.json");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
 
  render() { 
    return ( 
      <div className="container">
        <div className="form-inner" style={{marginTop: '15%'}}>
          <button 
            onClick={this.extractData}
            className="submit-button btn btn-primary btn-block"
            style={{width:'30%', margin: 'auto'}}
            >Extract Data
          </button>
          {this.state.data &&(
            <div>
              <h3 style={{textAlign: 'center'}}><br />Extract Succesfull!</h3>
              <button 
                onClick={this.downloadJson}
                className="submit-button btn btn-primary btn-block"
                style={{width:'30%', margin: 'auto'}}
                >Download Json
              </button>
              <br />
              <button 
                onClick={this.downloadXML}
                className="submit-button btn btn-primary btn-block"
                style={{width:'30%', margin: 'auto'}}
                >Download XML
              </button>            
            </div>
          )}
        </div>
      </div>
     );
  }
}
 
export default ExtractApplicationData;