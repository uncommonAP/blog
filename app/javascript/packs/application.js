import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({}),
  applyMiddleware(...middlewares)
)

import BlogSite from '../react/BlogSite'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><BlogSite /></Provider>, 
    document.getElementById('app')
  );
})
