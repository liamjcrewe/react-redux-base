import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import reducer, { baseInitialState } from './ducks'

let store = createStore(reducer, baseInitialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
