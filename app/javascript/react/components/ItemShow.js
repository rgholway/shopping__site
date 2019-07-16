import React, { Component } from 'react';
import PhotoTile from "./PhotoTile"

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      activePhoto: "",
      photoNumber: "",
      item: [],
      photos: []
    }
    this.fetchItem = this.fetchItem.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRight = this.handleRight.bind(this)
    this.handleEscape = this.handleEscape.bind(this)
    this.handleRightArrow = this.handleRightArrow.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
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
      this.setState({ item: body, photos: array, activePhoto: body.first_photo })
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

  handleRight() {
    if (this.state.photoNumber == 1) {
    this.setState({activePhoto: this.state.item.second_photo, photoNumber: 2})
    }
    if (this.state.photoNumber == 2) {
    this.setState({activePhoto: this.state.item.third_photo, photoNumber: 3})
    }
    if (this.state.photoNumber == 3) {
    this.setState({activePhoto: this.state.item.fourth_photo, photoNumber: 4})
    }
    if (this.state.photoNumber == 4) {
    this.setState({activePhoto: this.state.item.fifth_photo, photoNumber: 5})
    }
  }

  handleEscape() {
    this.setState({active: ""})
  }

  handleRightArrow(selectedNumber) {
    if (selectedNumber == 1) {
    this.setState({activePhoto: this.state.item.second_photo, photoNumber: 2})
    }
    if (selectedNumber == 2) {
    this.setState({activePhoto: this.state.item.third_photo, photoNumber: 3})
    }
    if (selectedNumber == 3) {
    this.setState({activePhoto: this.state.item.fourth_photo, photoNumber: 4})
    }
    if (selectedNumber == 4) {
    this.setState({activePhoto: this.state.item.fifth_photo, photoNumber: 5})
    }
  }

  handleLeft() {
    if (this.state.photoNumber == 2) {
    this.setState({activePhoto: this.state.item.first_photo, photoNumber: 1})
    }
    if (this.state.photoNumber == 3) {
    this.setState({activePhoto: this.state.item.second_photo, photoNumber: 2})
    }
    if (this.state.photoNumber == 4) {
    this.setState({activePhoto: this.state.item.third_photo, photoNumber: 3})
    }
    if (this.state.photoNumber == 5) {
    this.setState({activePhoto: this.state.item.fourth_photo, photoNumber: 4})
    }
  }

  handleKeyPress() {
    console.log(event.key);
    if (event.key == "ArrowRight") {
      this.handleRightArrow(this.state.photoNumber)
    }
    if (event.key == "ArrowLeft") {
      this.handleLeft()
    }
    if (event.key == "Escape") {
      this.handleEscape()
    }
  }

  componentWillMount() {
    this.fetchItem()
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    this.setState({photoNumber: 1})
  }

  render() {
    console.log(this.state.active);
    let num = this.state.photos.length
    let photosArray = this.state.photos.map(photo => {
      num += 1
      return(
        <PhotoTile
          key= {photo}
          name= {photo}
          length= {num}
          photo= {this.handlePhoto}
          />
      )
    })
    return (
      <div>
        <div className={`item__main__photo${this.state.active}`}>
          <img className={`show__photo${this.state.active}`}  src={this.state.activePhoto} onClick={this.handleClick}/>
        </div>
        <div className={`right__arrow${this.state.active}`} onClick={this.handleRight} onKeyDown={this.handleKeyPress}>{`>`}</div>
        <div className={`escape__key${this.state.active}`} onClick={this.handleEscape} onKeyDown={this.handleKeyPress}>X</div>
        <div className={`left__arrow${this.state.active}`} onClick={this.handleLeft}>{`<`}</div>
      </div>
    )
  }
}

export default ItemShow
