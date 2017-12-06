import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import articles from '../react/articlesIndex/reducers/allArticles'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({
    articles
  }),
  applyMiddleware(...middlewares)
)

import BlogSite from '../react/BlogSite'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><BlogSite /></Provider>,
    document.getElementById('app')
  );
})
