import React, { Component } from 'react';
import ItemTile from "./ItemTile"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.fetchItems = this.fetchItems.bind(this)
  }

  fetchItems() {
    fetch('/api/v1/items')
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
      this.setState({ items: body });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.fetchItems()
  }

  render() {
    let itemsArray = this.state.items.map(item => {
      return(
        <ItemTile
          key= {item.id}
          name= {item.name}
          firstPhoto= {item.first_photo}
          secondPhoto= {item.second_photo}
          thirdPhoto= {item.third_photo}
          fourthPhoto= {item.fourth_photo}
          fifthPhoto= {item.fifth_photo}
          sixthPhoto= {item.sixth_photo}
          description= {item.description}
          price= {item.price}
        />
      )
    })
    return (
          <div className="shopping">
            {itemsArray}
          </div>
    )
  }
}

export default HomePage
