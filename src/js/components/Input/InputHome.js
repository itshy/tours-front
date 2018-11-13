import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class InputHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      searchedTours: [],
    }
  }

  searchEvent = (event) => {
    const { tours } = this.props
    const searchStr = event.target.value
    var searchedTours = []
    
    for (let i = 0; i < tours.length; i++) {
      if (searchStr != '') {
        if (tours[i].name.toUpperCase().indexOf(searchStr.toUpperCase()) + 1) {
          searchedTours.push(tours[i])
        }
      }
    }
    
    this.setState({
      inputValue: event.target.value,
      searchedTours: searchedTours,
    })

  }

  showHint = () => {
    const { inputValue, searchedTours } = this.state
    const renderInput = (searchedTours) => {
      return (
        searchedTours.map((tour) => {
          return (
            <div className="input__hint-wrapper" key={tour.id}>
              <Link to={`/tour/${tour.id}`} className="input__hint">{tour.name + ' - ' + tour.price + '$'}</Link>
            </div>
          )
        })
      )
    }

    return (
      renderInput(searchedTours)
    )
  }

  render() {
    return (
      <div className="input__home">
        <input className="input__home-input" placeholder="Оставьте комментарий" onChange={(event) => this.searchEvent(event)}></input>
        <div className="input__hint-block">
          {this.showHint()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tours: state.tours,
})

export default connect(mapStateToProps, null)(InputHome)