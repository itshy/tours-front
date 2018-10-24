import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import store from './js/store/store'
import App from './js/App'
import './js/jquery.js'
import './js/materialize.js'
import './css/style.css'
import './css/logo.css'
import './css/input.css'
import './css/materialize.css'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
