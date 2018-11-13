import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../js/containers/Home/Home'
import NotFound from './components/NotFound'
import PageFound from './components/PageFound'
import PageElement from './components/PageTour'


export default class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/n" component={PageFound} />
        <Route path="/tour/:id" component={PageElement} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}
