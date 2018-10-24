import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentElement from './../../components/ContentElement/ContentElement'


class Content extends Component {
  handleClick = () => {
    console.log("content")
  } 
  renderElements() {
    const { tours } = this.props

    console.log('State был изменён', tours)

    if (!tours) return;
    
    // Проверка active тура - чтобы исключить неактивные, например при фильтрации
    return (
      tours.map((tours, index) => {
        if (tours.active) {
          return (
            <ContentElement onClick={this.handleClick} key={index} tours={tours} />
          )
        }
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

export default connect(mapStateToProps)(Content)