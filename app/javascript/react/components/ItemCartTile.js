import React, { Component } from 'react';

class ItemCartTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: ""
    }
  }

  render() {
    console.log(this.props.name);
    console.log("hello");
      return(
        <div className="cart__item">
          <div className="cart__name">{this.props.name}</div>
        </div>
      )
    }
  }

export default ItemCartTile
