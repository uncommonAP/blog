import { FETCH_DRAFTS, FETCH_DRAFTS_SUCCESS } from '../actions/getDrafts'

let initialState = {
  isFetching: false,
  drafts: []
}

const drafts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DRAFTS:
      return Object.assign({}, state, { isFetching: true })
    case FETCH_DRAFTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        drafts: action.drafts
      })
    default:
      return state
  }
}

export default drafts
