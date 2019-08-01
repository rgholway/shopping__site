import React, { Component } from 'react';
import ItemCartTile from "./ItemCartTile"
import PhotoCartTile from "./PhotoCartTile"

class CartShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
       names: [],
       images: [],
      totalItems: ""
    }
    this.fetchCart = this.fetchCart.bind(this)
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
      debugger;
      this.setState({ totalItems: body[0], names: body[2], images: body[3] })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillMount() {
    this.fetchCart()
  }

  render() {
    let num = 0
    let itemsArray = this.state.names.map(item => {
      num += 1
      return(
        <ItemCartTile
          key= {num}
          name= {item}
          />
      )
    })

    let number = 0
    let photosArray = this.state.images.map(item => {
      number += 1
      return(
        <PhotoCartTile
          key= {num}
          photo= {item}
          />
      )
    })
      return(
        <div>
          <div className="cart__title">My Cart</div>
          <div className="cart__background">
            <div className="cart__items">
              {itemsArray}
              {photosArray}
            </div>
          </div>
        </div>
      )
    }
  }

export default CartShow
