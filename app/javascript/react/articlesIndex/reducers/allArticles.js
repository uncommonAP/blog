import { FETCH_ALL_ARTICLES, FETCH_ALL_ARTICLES_SUCCESS } from '../actions/getAllArticles'

let intitialState = {
  isFetching: false,
  articles: []
}

const articles = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ARTICLES:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_ALL_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      })
  }
}

export default articles
