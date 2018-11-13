import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentElement from './../../components/ContentElement/ContentElement'
import { getToursDB } from '../../../api'
import { getToursFromDB } from '../../actions'


class Content extends Component {
  handleClick = () => {
    console.log("content")
  }

  componentWillMount() {
    const { getToursFromDB } = this.props

    getToursDB()
      .then((response) => {
        console.log(response.data)
        getToursFromDB(response.data)
      })
  }
  
  renderElements() {
    const { tours } = this.props

    console.log('State был изменён', tours)

    if (!tours) return;
    
    // Проверка active тура - чтобы исключить неактивные, например при фильтрации
    return (
      tours.map((tours, index) => {
        return (
          <ContentElement onClick={this.handleClick} key={index} tours={tours} updateTours={() => this.componentWillMount()} />
        )
      })
    )
  }

  render() {
    // const tours = this.props.tours
    // const toursRender = tours.map((tours, index) => (<ContentElement key={index} tours={tours} />))
    return (
      <div className="row">
        {this.renderElements()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tours: state.tours
})

const mapDispatchToProps = (dispatch) => ({
  getToursFromDB: (tours) => dispatch(getToursFromDB(tours)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)