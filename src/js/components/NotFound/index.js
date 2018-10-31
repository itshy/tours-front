import React, { Component } from 'react'

export default class NotFound extends Component {
  render() {
    const { location } = this.props
    return (
      <div>
      {location.pathname}
        Not Found 
      </div>
    )
  }
}
