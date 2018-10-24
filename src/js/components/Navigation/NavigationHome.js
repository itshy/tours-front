import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTour, sortTours } from '../../actions/index'

class NavigationHome extends Component {

  sortUpTours = () => {
    const { toursToSort, sortTours } = this.props

    for (var i = 0; i < toursToSort.length; i++) {
      const bufferTour = toursToSort[i]
      
      for (var j = 0 + i; j < toursToSort.length; j++) {
        if (bufferTour.price > toursToSort[j].price) {
          bufferTour = toursToSort[j]
          toursToSort[j] = toursToSort[i]
          toursToSort[i] = bufferTour
        }
      }
      const tours = toursToSort

      // console.log(tours)
      sortTours(tours)
    }
  }

  sortDownTours = () => {
    const { toursToSort, sortTours } = this.props

    for (var i = 0; i < toursToSort.length; i++) {
      const bufferTour = toursToSort[i]

      for (var j = 0 + i; j < toursToSort.length; j++) {
        if (bufferTour.price < toursToSort[j].price) {
          bufferTour = toursToSort[j]
          toursToSort[j] = toursToSort[i]
          toursToSort[i] = bufferTour
        }
      }
      const tours = toursToSort

      // console.log(tours)
      sortTours(tours)
    }
  }

  addNewTour = () => {
    const { addTour } = this.props

    const randomPrice = (Math.floor(Math.random() * (10000 - 0 + 1)) + 0)
    console.log('Добавлен новый тур с ценой =', randomPrice)
    addTour(randomPrice)
  }

  render() {
    return (
      <div className="navigation__home">
        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.sortUpTours}><i className="large material-icons">arrow_drop_up</i></a>
        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.sortDownTours}><i className="large material-icons">arrow_drop_down</i></a>
        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">Country 1</a></li>
          <li><a href="#!">Country 2</a></li>
          <li><a href="#!">Country 3</a></li>
        </ul>
        <a className="btn dropdown-trigger" href="#!" data-target="dropdown1">Country<i className="material-icons right">arrow_drop_down</i></a>     
        <ul id="dropdown2" className="dropdown-content">
          <li><a href="#!">City 1</a></li>
          <li><a href="#!">City 2</a></li>
          <li><a href="#!">City 3</a></li>
        </ul>
        <a className="btn dropdown-trigger" href="#!" data-target="dropdown2">City<i className="material-icons right">arrow_drop_down</i></a>  
        <ul id="dropdown3" className="dropdown-content">
        <li><a href="#!">1x<i className="material-icons">star</i></a></li>
        <li><a href="#!">2x<i className="material-icons">star</i></a></li>
        <li><a href="#!">3x<i className="material-icons">star</i></a></li>
        <li><a href="#!">4x<i className="material-icons">star</i></a></li>
        <li><a href="#!">5x<i className="material-icons">star</i></a></li>
        </ul>
        <a className="btn dropdown-trigger" href="#!" data-target="dropdown3">Rating<i className="material-icons right">star</i></a>
        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.addNewTour}><i className="material-icons">add</i></a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  toursToSort: state.tours,
})

// addTour будет находиться в props этого компонента. Диспатчим action addTour и передаём в него параметры, которые нужно добавить/изменить
const mapDispatchToProps = (dispatch) => ({
  addTour: (randomPrice) => dispatch(addTour('id', 'NAME', 'Описание тура', randomPrice, 5, true)),
  sortTours: (tours) => dispatch(sortTours(tours)),
})

// Первый параметр - это mapStateToProps, а второй mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(NavigationHome)