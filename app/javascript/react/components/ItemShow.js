import React, { Component } from 'react';
import PhotoTile from "./PhotoTile"
import { browserHistory } from 'react-router';

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      activePhoto: "",
      photoNumber: "",
      item: [],
      photos: [],
      buyActive: "",
      cartActive: "",
      cartItems: "0",
      heh: ""
    }
    this.fetchItem = this.fetchItem.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleRight = this.handleRight.bind(this)
    this.handleEscape = this.handleEscape.bind(this)
    this.handleRightArrow = this.handleRightArrow.bind(this)
    this.handleLeft = this.handleLeft.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.goHome = this.goHome.bind(this)
    this.buyNowEnter = this.buyNowEnter.bind(this)
    this.addCartEnter = this.addCartEnter.bind(this)
    this.addCartLeave = this.addCartLeave.bind(this)
    this.buyNowLeave = this.buyNowLeave.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.fetchCart = this.fetchCart.bind(this)
    this.cartLink = this.cartLink.bind(this)
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

  cartLink() {
    browserHistory.push('/cart/1')
  }

  goHome() {
    browserHistory.push('/')
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
    if (this.state.photoNumber == 5) {
      this.setState({activePhoto: this.state.item.first_photo, photoNumber: 1})
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
    if (selectedNumber == 5) {
    this.setState({activePhoto: this.state.item.fifth_photo, photoNumber: 1})
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

  buyNowEnter() {
    this.setState({buyActive: "--hover"})
  }

  addCartEnter() {
    this.setState({cartActive: "--cartHover"})
  }

  buyNowLeave() {
    this.setState({buyActive: ""})
  }

  addCartLeave() {
    this.setState({cartActive: ""})
  }

  handleKeyPress() {
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

  addToCart() {
    let jsonInfo = {item: this.state.item}
    fetch(`/api/v1/carts/1`, {
      method: 'PUT',
      body: jsonInfo,
      headers: {
        'Accept': 'application/json'},
        credentials: 'same-origin'
      })
      this.setState({heh: "reload please"}, () => {this.newItem()})
  }

  newItem() {
      let integer = parseFloat(this.state.cartItems)
      let num = (integer + 1)
      this.setState({cartItems: num})
  }

  fetchCart() {
    fetch(`/api/v1/carts/1`)
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
      this.setState({ cartItems: body[0] })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillMount() {
    this.fetchItem()
    this.fetchCart()
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
    this.setState({photoNumber: 1})
  }

  render() {
    console.log(this.state.cartActive)
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
        <div className="item__main__name">{this.state.item.name} <h6 className="price">{this.state.item.price}</h6></div>
        <div className="diechi" onClick={this.goHome}>Diechi</div>
        <div className="arrow__keys">Use Arrow Keys to View Photos</div>
        <div className="buy__now" onMouseEnter={this.buyNowEnter} onMouseLeave={this.buyNowLeave}><h6 className={`buy__now__text${this.state.buyActive}`}>Buy Now</h6></div>
        <div className="add__cart" onClick={this.addToCart} onMouseEnter={this.addCartEnter} onMouseLeave={this.addCartLeave}><h6 className={`add__cart__text${this.state.cartActive}`}>Add To Cart</h6></div>
        <div className="item__main__description">{this.state.item.description}</div>
        <div className={`right__arrow${this.state.active}`} onClick={this.handleRight} onKeyDown={this.handleKeyPress}>
          <h6 className={`right__arrow__text${this.state.active}`}>{`>`}</h6>
        </div>
        <div className={`escape__key${this.state.active}`} onClick={this.handleEscape} onKeyDown={this.handleKeyPress}>X</div>
        <div className={`left__arrow${this.state.active}`} onClick={this.handleLeft}>
          <h6 className={`left__arrow__text${this.state.active}`}>{`<`}</h6>
        </div>
        <div className="cart" onClick={this.cartLink}>
          <img className="shopping__cart" src='https://img.icons8.com/office,office40/2x/shopping-cart.png'></img>
          <div className="cart__number"><h6 className="number__text">{this.state.cartItems}</h6></div>
        </div>
      </div>
    )
  }
}

export default ItemShow
