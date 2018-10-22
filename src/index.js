import React from 'react'
import { render } from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import Root from './components/Root'
import './index.scss';
import * as serviceWorker from './serviceWorker'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

render(
  <Root store={store} />,
  document.getElementById('root')
)

serviceWorker.register()