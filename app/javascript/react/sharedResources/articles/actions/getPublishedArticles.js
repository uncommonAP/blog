export const FETCH_PUBLIC_ARTICLES = 'FETCH_PUBLIC_ARTICLES'
export const FETCH_PUBLIC_ARTICLES_SUCCESS = 'FETCH_PUBLIC_ARTICLES_SUCCESS'

let fetchPublishedArticles = () => {
  return {
    type: FETCH_PUBLIC_ARTICLES
  }
}

let fetchPublishedArticlesSuccess = (articles) => {
  return {
    type: FETCH_PUBLIC_ARTICLES_SUCCESS,
    articles
  }
}

let getPublishedArticles = () => dispatch => {
  dispatch(fetchPublishedArticles())
  return fetch('/api/v1/articles.json', {
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(data => {
    dispatch(fetchPublishedArticlesSuccess(data.articles))
  })
}

export {
  fetchPublishedArticles,
  fetchPublishedArticlesSuccess,
  getPublishedArticles
}
