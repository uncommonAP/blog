export const TOGGLE_ARTICLE = 'TOGGLE_ARTICLE'
export const FETCH_ARTICLE = 'FETCH_ARTICLE'
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS'

let toggleArticle = id => {
  return {
    type: TOGGLE_ARTICLE,
    id
  }
}

let fetchArticle = () => {
  return {
    type: FETCH_ARTICLE
  }
}

let fetchArticleSuccess = article => {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    article
  }
}

let getArticle = id => dispatch => {
  dispatch(fetchArticle())
  return fetch(`/api/v1/articles/${id}.json`, {
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(data => {
    dispatch(fetchArticleSuccess(data.article))
  })
}

export {
  fetchArticle,
  fetchArticleSuccess,
  getArticle,
  toggleArticle
}
