import React, { Component } from 'react';

class ItemShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
      item: []
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
      this.setState({ item: body });
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
    return (
      <div>
        <div className={`item__main__photo${this.state.active}`}>
          <img className={`show__photo${this.state.active}`} src={this.state.item.first_photo} onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default ItemShow
