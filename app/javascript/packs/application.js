import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import articles from '../react/sharedResources/reducers/allArticles'
import article from '../react/sharedResources/reducers/article'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({
    articles,
    article
  }),
  applyMiddleware(...middlewares)
)

import BlogSite from '../react/BlogSite'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><BlogSite type='public'/></Provider>,
    document.getElementById('app')
  );
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><BlogSite type='admin' /></Provider>,
    document.getElementById('admin')
  )
})
