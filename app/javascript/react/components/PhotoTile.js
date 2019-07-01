import React, { Component } from 'react';
import PhotoTile from "./PhotoTile"

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    }
  }

  render() {
    return (
      <div>
        <img src={this.props.name} />
      </div>
    )
  }
}

export default ItemShow
