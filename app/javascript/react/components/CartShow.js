import React, { Component } from 'react';
import ItemCartTile from "./ItemCartTile"

class CartShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      items: [],
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
      this.setState({ totalItems: body[0], items: body[1] })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentWillMount() {
    this.fetchCart()
  }

  render() {
    debugger;
    let num = 0
    let itemsArray = this.state.items.map(item => {
      num += 1
      return(
        <ItemCartTile
          key= {num}
          id= {item.id}
          name= {item.name}
          description= {item.description}
          photo= {item.first_photo}
          />
      )
    })
      return(
          <div> {itemsArray} </div>
      )
    }
  }

export default CartShow
