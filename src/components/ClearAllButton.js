import React, { Component } from 'react';
import './ClearAllButton.css';

class ClearAllButton extends Component {
  render() {
    return (
      <div className="clear-all-btn"
      onClick={()=> this.props.handleClearAll()}
      >
          {this.props.children}
      </div>
    );
  }
}

export default ClearAllButton;
