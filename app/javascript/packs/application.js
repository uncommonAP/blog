import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import articles from '../react/articlesPublic/reducers/allArticles'
import article from '../react/articlesPublic/reducers/article'

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
    <Provider store={store}><BlogSite /></Provider>,
    document.getElementById('app')
  );
})
