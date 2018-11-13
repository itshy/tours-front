import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { addTour, sortTours, loadMoreTours } from '../../actions/index'
import { addNewTourDB, getToursDB, sortByPriceUp, sortByPriceDown, loadMore } from '../../../api'

class NavigationHome extends Component {

  sortUpTours = () => {
    const { toursToSort, sortTours } = this.props
    const contTours = toursToSort.length

    sortByPriceUp(contTours)
      .then((response) => {
        const tours = response.data
        sortTours(tours)
      })
  }

  sortDownTours = () => {
    const { toursToSort, sortTours } = this.props
    const contTours = toursToSort.length

    sortByPriceDown(contTours)
      .then((response) => {
        const tours = response.data
        sortTours(tours)
      })
  }

  addNewTour = () => {
    const { addTour } = this.props

    const randomPrice = (Math.floor(Math.random() * (10000 - 0 + 1)) + 0)
    console.log('Добавлен новый тур с ценой =', randomPrice)
    addTour(randomPrice)

    const tours = {
      name: 'Italy',
      about: 'Этот известный туристический комплекс состоит из трех комфортабельных зданий и со всех сторон окружен пышной зеленью.',
      price: 1400,
      rate: 4,
      active: true,
      img: 'https://bit.ly/2Ojmg54',
    }

    addNewTourDB(tours)
  }

  getTours = () => {
    getToursDB()
  }

  loadMore = () => {
    const tours = this.props.toursToSort
    const toursCount = tours.length

    console.log(toursCount)
    loadMore(toursCount)
      .then((response) => {
        const newData = response.data
        this.props.loadMoreTours(newData)
      })
  }

  render() {
    console.log('render')

    return (
      <div>
        <div className="navigation__home">
          <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.sortUpTours}><i className="large material-icons">arrow_drop_up</i></a>
          <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.sortDownTours}><i className="large material-icons">arrow_drop_down</i></a>
          <ul id="dropdown1" className="dropdown-content">
            <li><a>Country 1</a></li>
            <li><a>Country 2</a></li>
            <li><a>Country 3</a></li>
          </ul>
          <a className="btn dropdown-trigger" data-target="dropdown1">Country<i className="material-icons right">arrow_drop_down</i></a>     
          <ul id="dropdown2" className="dropdown-content">
            <li><a>City 1</a></li>
            <li><a>City 2</a></li>
            <li><a>City 3</a></li>
          </ul>
          <a className="btn dropdown-trigger" data-target="dropdown2">City<i className="material-icons right">arrow_drop_down</i></a>  
          <ul id="dropdown3" className="dropdown-content">
          <li><a>1x<i className="material-icons">star</i></a></li>
          <li><a>2x<i className="material-icons">star</i></a></li>
          <li><a>3x<i className="material-icons">star</i></a></li>
          <li><a>4x<i className="material-icons">star</i></a></li>
          <li><a>5x<i className="material-icons">star</i></a></li>
          </ul>
          <a className="btn dropdown-trigger" href="#!" data-target="dropdown3">Rating<i className="material-icons right">star</i></a>
          <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.addNewTour}><i className="material-icons">add</i></a>
          <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.getTours}>console</a>
          <Link to='/n' className="btn-floating btn-large waves-effect waves-light red">link</Link>
        </div>
        <div>
          <a className="waves-effect waves-light btn" onClick={this.loadMore}>Загрузить ещё</a>
        </div>
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
  loadMoreTours: (newTours) => dispatch(loadMoreTours(newTours))
})

// Первый параметр - это mapStateToProps, а второй mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(NavigationHome)