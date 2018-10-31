import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import store from './js/store/store'
import App from './js/App'
import './js/jquery.js'
import './js/materialize.js'
import './css/style.css'
import './css/logo.css'
import './css/input.css'
import './css/materialize.css'


ReactDOM.render (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
)
