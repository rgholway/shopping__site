import React, { Component } from 'react';
import PhotoTile from "./PhotoTile"

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      item: [],
      photos: []
    }
    this.fetchItem = this.fetchItem.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  fetchItem() {
    fetch(`/api/v1/items/${this.props.params.id}`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let array = []
      array.push(body.first_photo, body.second_photo, body.third_photo, body.fourth_photo, body.fifth_photo)
      this.setState({ item: body, photos: array })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleClick() {
    if (this.state.active == "") {
    this.setState({active: "--active"})
    }
    if (this.state.active == "--active") {
    this.setState({active: ""})
    }
  }

  componentWillMount() {
    this.fetchItem()
  }

  render() {
    let num = this.state.photos.length
    let photosArray = this.state.photos.map(photo => {
      num += 1
      return(
        <PhotoTile
          key= {photo}
          name= {photo}
          length= {num}
          />
      )
    })
    return (
      <div>
        <div className={`item__main__photo${this.state.active}`}>
          <img className={`show__photo${this.state.active}`}  src={this.state.item.first_photo} onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default ItemShow
