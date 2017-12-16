export const FETCH_DRAFTS = 'FETCH_DRAFTS'
export const FETCH_DRAFTS_SUCCESS = 'FETCH_DRAFTS_SUCCESS'



let fetchDrafts = () => {
  return {
    type: FETCH_DRAFTS
  }
}

let fetchDraftsSuccess = drafts => {
  return {
    type: FETCH_DRAFTS_SUCCESS,
    drafts
  }
}

let getDrafts = () => dispatch => {
  dispatch(fetchDrafts())
  return fetch('/api/v1/admin/articles/draft_index.json', {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" }
  }) .then(response => response.json())
  .then(body => {
    dispatch(fetchDraftsSuccess(body.articles))
  })
}

export {
  getDrafts
}
