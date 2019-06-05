import React, { Component } from 'react';

class ItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: `${this.props.firstPhoto}`
    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
  }

  mouseEnter() {
    this.setState({selectedPhoto: this.props.secondPhoto})
  }

  mouseLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  render() {
    return (
      <div className="item" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <div className="item__name"> {this.props.name}</div>
        <img className="item__photo" src={this.state.selectedPhoto}/>
      </div>
    )
  }
}

export default ItemTile
