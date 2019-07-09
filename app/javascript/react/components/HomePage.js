import React, { Component } from 'react';
import ItemTile from "./ItemTile"

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      menuActive: "",
      numbers: "three"
    }
    this.fetchItems = this.fetchItems.bind(this)
    this.handleMenuClick = this.handleMenuClick.bind(this)
    this.handleTwo = this.handleTwo.bind(this)
    this.handleThree = this.handleThree.bind(this)
    this.handleFour = this.handleFour.bind(this)
    this.handleCloseMenuClick = this.handleCloseMenuClick.bind(this)
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

  handleMenuClick() {
    this.setState({menuActive: "active"})
  }

  handleTwo() {
    this.setState({numbers: "two"})
  }

  handleThree() {
    this.setState({numbers: "three"})
  }

  handleFour() {
    this.setState({numbers: "four"})
  }

  handleCloseMenuClick() {
    this.setState({menuActive: ""})
  }

  render() {
    let itemsArray = this.state.items.map(item => {
      return(
        <ItemTile
          key= {item.id}
          id= {item.id}
          name= {item.name}
          firstPhoto= {item.first_photo}
          secondPhoto= {item.second_photo}
          thirdPhoto= {item.third_photo}
          fourthPhoto= {item.fourth_photo}
          fifthPhoto= {item.fifth_photo}
          sixthPhoto= {item.sixth_photo}
          description= {item.description}
          price= {item.price}
          number= {this.state.numbers}
        />
      )
    })
    return (
        <div>
          <div className="shopping">
            {itemsArray}
          </div>
          <div className="title"></div>
          <div className={`phone__menu--${this.state.menuActive}`}>
            <h1 className={`phone__menu__lines--${this.state.menuActive}`} onClick={this.handleMenuClick}>|||</h1>
            <h1 className={`active__menu__lines--${this.state.menuActive}`} onClick={this.handleCloseMenuClick}>|||</h1>
          </div>
          <div className="items__number">
            <div className="number__3" onClick={this.handleTwo}>2</div>
            <div className="number__2" onClick={this.handleThree}>3</div>
            <div className="number__4" onClick={this.handleFour}>4</div>
          </div>
        </div>
    )
  }
}

export default HomePage
