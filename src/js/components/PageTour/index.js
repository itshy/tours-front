import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getToursDB, addComment, getComments } from '../../../api'
import { updateTourPage } from '../../actions'

class PageElement extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      data: [],
    }
  }
  
  componentWillMount() {
    
    getToursDB()
      .then((response) => {
        const {match, updateTourPage} = this.props
        const idGet = match.params.id

        const getTours = response.data // all tours from DB

        var getOneTour = response.data[0]

        for (var i = 0; i < getTours.length; i++) {
          if (getTours[i].id == idGet) {
            getOneTour = getTours[i]
          }
        }

        updateTourPage(getOneTour)

        console.log(getOneTour, 'отправил')

        this.showComments()

      })
  }

  commentToState = (event) => {
    this.setState({
      comment: event.target.value,
    })
  }

  sendComment = () => {
    const commentToAdd = {
      comment: this.state.comment,
      tourID: this.props.getOneTour.id
    }

    addComment(commentToAdd)
      .then(() => {
        console.log('Комментарий добавлен')
        this.componentWillMount()
      })
  }

  showComments = () => {
    const tourID = this.props.getOneTour.id
    getComments(tourID)
      .then((response) => {
        this.setState({
          data: response.data,
        })
      })
  }

  renderComment = () => {
    const comments = this.state.data
    // console.log(comments)
    
    return (
      comments.map((comment) => {
        return (
          <div className="col s12 m5 comment-card" key={comment.id}>
            <div className="card-panel teal">
              <span className="white-text">{comment.comment}</span>
            </div>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="row one-card-center">
        <div className="col l3 s12 m7 content-element__animation one-card-center">
          <div className="card card-width">
            <div className="card-image">
              <img src={this.props.getOneTour.img} />
              <span className="card-title">{ this.props.getOneTour.name ? this.props.getOneTour.name : "ГОРОД НЕ ПОЛУЧЕН" }</span>
            </div>
            <div className="card-content card-content-open">
              <p>{ this.props.getOneTour.about ? this.props.getOneTour.about : "Описание тура не найдено" }</p>
            </div>
            <div className="card-action">
              {/* <a href="#">Поехать в { this.props.country ? this.props.country : "ГОРОД НЕ ПОЛУЧЕН" }</a> */}
              <a>Забронировать - { this.props.getOneTour.price ? this.props.getOneTour.price : "Цена не получена" }</a>
              <a className="waves-effect waves-light btn" onClick={this.test1}>Скрыть</a>
            </div>
          </div>
        </div>
        <Link to="/" className="waves-effect waves-light btn">Назад</Link>
        <input className="input__home-input input__comment" placeholder="Введите название тура" onChange={(event) => this.commentToState(event)}></input>
        <a className="waves-effect waves-light btn" onClick={this.sendComment}>Отправить</a>
        <div className="comments-block">
          <div className="row">
            { this.renderComment() }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  getTours: state.tours,
  getOneTour: state.tour,
})

const mapDispatchToProps = (dispatch) => ({
  updateTourPage: (getOneTour) => dispatch(updateTourPage(getOneTour)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PageElement)