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
      return(
        <div>{this.props.name}{this.props.description}
          <img src={this.props.photo}/>
        </div>
      )
    }
  }

export default ItemCartTile
