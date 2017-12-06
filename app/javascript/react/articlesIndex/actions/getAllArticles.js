export const FETCH_ALL_ARTICLES = 'FETCH_ALL_ARTICLES'
export const FETCH_ALL_ARTICLES_SUCCESS = 'FETCH_ALL_ARTICLES_SUCCESS'

let fetchAllArticles = () => {
  return {
    type: FETCH_ALL_ARTICLES
  }
}

let fetchAllArticlesSuccess = (articles) => {
  return {
    type: FETCH_ALL_ARTICLES_SUCCESS,
    articles
  }
}

let getAllArticles = () => dispatch => {
  dispatch(fetchAllArticles())
  return fetch('/api/v1/articles', {
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(data => {
    dispatch(fetchAllArticlesSuccess(data.articles))
  })
}

export {
  fetchAllArticles,
  fetchAllArticlesSuccess,
  getAllArticles
}
