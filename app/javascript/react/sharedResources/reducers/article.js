import { TOGGLE_ARTICLE, FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS } from '../actions/getArticle'

let intitialState = {
  isFetching: false,
  article: {},
  currentArticle: null
}

const article = (state = intitialState, action) => {
  switch (action.type) {
    case TOGGLE_ARTICLE:
      return Object.assign({}, state, { currentArticle: action.id })
    case FETCH_ARTICLE:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_ARTICLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        article: action.article
      })
    default:
      return state
  }
}

export default article
