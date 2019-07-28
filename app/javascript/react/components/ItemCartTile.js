import React, { Component } from 'react';

class ItemCartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    }
  }

  render() {
      return(
        <div>
          <div className="title">MY CART</div>
          <div className="cart"></div>
        </div>
      )
    }
  }

export default ItemCartTile
