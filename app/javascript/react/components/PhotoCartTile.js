import React, { Component } from 'react';

class PhotoCartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    }
  }

  render() {
    debugger;
      return(
          <img className="cart__image" src={this.props.photo}></img>
      )
    }
  }

export default PhotoCartTile
