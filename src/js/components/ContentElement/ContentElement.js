import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { makeOrder } from '../../../api'


export default class ContentElement extends Component {
  onClick = () => {
    const { tours, updateTours } = this.props
    if (tours.active) {
      var toursActive = false
    } else {
      var toursActive = true
    }

    makeOrder({
      tourID: tours.id,
      active: toursActive,
    })
      .then(updateTours)
  }

  orderElement = () => {
    const { tours } = this.props
    
    if (tours.active) {
      return {
        __html: 'Забронировать'
      }
    } else {
      return {
        __html: 'Снять бронь'
      }
    }
  }

  render() {
    const {tours} = this.props

    return (
      <div className="col l4 s12 m7 content-element__animation">
        <div className="card">
          <div className="card-image">
            <img src={tours.img} />
            <span className="card-title">{ tours.name ? tours.name : "ГОРОД НЕ ПОЛУЧЕН" }</span>
          </div>
          <div className="card-content">
            <p>{ tours.about ? tours.about : "Описание тура не найдено" }</p>
          </div>
          <div className="card-action">
            {/* <a href="#">Поехать в { this.props.country ? this.props.country : "ГОРОД НЕ ПОЛУЧЕН" }</a> */}
            <Link to={`/tour/${tours.id}`}>Поехать - { tours.price ? tours.price : "Цена не получена" }</Link>
            <a className="waves-effect waves-light btn" onClick={this.onClick} dangerouslySetInnerHTML={this.orderElement()}></a>
          </div>
        </div>
      </div>
    )
  }
}