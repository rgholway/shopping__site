import React, { Component } from 'react';

class ItemTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: `${this.props.firstPhoto}`,
      active: ""
    }
    this.mouseEnter = this.mouseEnter.bind(this)
    this.mouseLeave = this.mouseLeave.bind(this)
    this.handleFirstEnter = this.handleFirstEnter.bind(this)
    this.handleFirstLeave = this.handleFirstLeave.bind(this)
    this.handleSecondEnter = this.handleSecondEnter.bind(this)
    this.handleSecondLeave = this.handleSecondLeave.bind(this)
    this.handleThirdEnter = this.handleThirdEnter.bind(this)
    this.handleThirdLeave = this.handleThirdLeave.bind(this)
    this.handleFourthEnter = this.handleFourthEnter.bind(this)
    this.handleFourthLeave = this.handleFourthLeave.bind(this)
    this.handleFifthEnter = this.handleFifthEnter.bind(this)
    this.handleFifthLeave = this.handleFifthLeave.bind(this)
    this.handleSixthEnter = this.handleSixthEnter.bind(this)
    this.handleSixthLeave = this.handleSixthLeave.bind(this)
  }

  mouseEnter() {
    this.setState({active: "active"})
  }

  mouseLeave() {
    this.setState({active: ""})
  }

  handleFirstEnter() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  handleFirstLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  handleSecondEnter() {
    this.setState({selectedPhoto: this.props.secondPhoto})
  }

  handleSecondLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  handleThirdEnter() {
    this.setState({selectedPhoto: this.props.thirdPhoto})
  }

  handleThirdLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  handleFourthEnter() {
    this.setState({selectedPhoto: this.props.fourthPhoto})
  }

  handleFourthLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  handleFifthEnter() {
    this.setState({selectedPhoto: this.props.fifthPhoto})
  }

  handleFifthLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  handleSixthEnter() {
    this.setState({selectedPhoto: this.props.sixthPhoto})
  }

  handleSixthLeave() {
    this.setState({selectedPhoto: this.props.firstPhoto})
  }

  render() {
    return (
      <div className={`item--${this.state.active}`} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
        <img className="item__photo" src={this.state.selectedPhoto}/>
        <div className={`item__name--${this.state.active}`}> {this.props.name} </div>
        <div className={`other__photos--${this.state.active}`} >
          <img className="small__photos" src={this.props.firstPhoto} onMouseEnter={this.handleFirstEnter} onMouseLeave={this.handleFirstLeave} />
          <img className="small__photos" src={this.props.secondPhoto} onMouseEnter={this.handleSecondEnter} onMouseLeave={this.handleSecondLeave}/>
          <img className="small__photos" src={this.props.thirdPhoto} onMouseEnter={this.handleThirdEnter} onMouseLeave={this.handleThirdLeave}/>
          <img className="small__photos" src={this.props.fourthPhoto} onMouseEnter={this.handleFourthEnter} onMouseLeave={this.handleFourthLeave}/>
          <img className="small__photos" src={this.props.fifthPhoto} onMouseEnter={this.handleFifthEnter} onMouseLeave={this.handleFifthLeave}/>
          <img className="small__photos" src={this.props.sixthPhoto} onMouseEnter={this.handleSixthEnter} onMouseLeave={this.handleSixthLeave}/>
        </div>

      </div>
    )
  }
}

export default ItemTile
