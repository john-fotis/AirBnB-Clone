import React, { Component } from 'react';
// import Menu from '@material-ui/icons/Menu'
import './HiddenMenu.css'

class HiddenMenu extends Component {
  constructor(props){
      super(props)

      this.state = {
          showMenu: false
      }

      this.handleMouseDown.bind(this);
      this.menuShowToggle = this.menuShowToggle.bind(this);
  }

  menuShowToggle = () => {
      this.setState({showMenu: !this.state.showMenu})
  }

  handleMouseDown(e) {
    this.menuShowToggle();
    console.log("clicked");
    e.stopPropagation();
  }

  render = () => { 
      return (
          <div>
              <div className = {this.state.showMenu ? 'showMenu': 'hideMenu'} />
              <button 
                className = 'toggle-button'
                type="button"    
                onClick={this.menuShowToggle} 
                value="toggle"
                >
                    <div className = 'button-line' />
                    <div className = 'button-line' />
                    <div className = 'button-line' />
                </button>
          </div>
      )
  }
}

export default HiddenMenu;