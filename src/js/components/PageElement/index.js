import React, { Component } from 'react'

export default class PageElement extends Component {
  render() {
    return (
      <div className="col l4 s12 m7 content-element__animation">
        <div className="card">
          <div className="card-image">
            <img src={img1} />
            <span className="card-title">{ tours.name ? tours.name : "ГОРОД НЕ ПОЛУЧЕН" }</span>
          </div>
          <div className="card-content">
            <p>{ tours.about ? tours.about : "Описание тура не найдено" }</p>
          </div>
          <div className="card-action">
            {/* <a href="#">Поехать в { this.props.country ? this.props.country : "ГОРОД НЕ ПОЛУЧЕН" }</a> */}
            <a href="#">Поехать - { tours.price ? tours.price : "Цена не получена" }</a>
            <a className="waves-effect waves-light btn" onClick={this.onClick}>Скрыть</a>
          </div>
        </div>
      </div>
    )
  }
}
