import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import articles from '../react/sharedResources/articles/reducers/publishedArticles'
import article from '../react/sharedResources/articles/reducers/article'
import drafts from '../react/sharedResources/articles/reducers/drafts'
import toggle from '../react/sharedResources/articles/reducers/toggle'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({
    articles,
    article,
    drafts,
    toggle
  }),
  applyMiddleware(...middlewares)
)

import PublicLanding from '../react/PublicLanding'
import AdminLanding from '../react/AdminLanding'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><PublicLanding/></Provider>,
    document.getElementById('app')
  );
})

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><AdminLanding type='admin' /></Provider>,
    document.getElementById('admin')
  )
})
