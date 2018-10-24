import React, { Component } from 'react'
import Logo from '../../components/Logo/Logo'
import InputHome from '../../components/Input/InputHome'
import NavigationHome from '../../components/Navigation/NavigationHome'
import Content from '../Content/Content'


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Logo />
        <div className="input-home">
          <InputHome />
        </div>
        <div className="navigation-home">
          <NavigationHome />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    )
  }
}