import { FETCH_PUBLIC_ARTICLES, FETCH_PUBLIC_ARTICLES_SUCCESS } from '../actions/getPublishedArticles'

let intitialState = {
  isFetching: false,
  articles: []
}

const articles = (state = intitialState, action) => {
  switch (action.type) {
    case FETCH_PUBLIC_ARTICLES:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_PUBLIC_ARTICLES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.articles
      })
    default:
      return state
  }
}

export default articles
