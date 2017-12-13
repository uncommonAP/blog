import {
  CHECK_LOGIN_STATE,
  CHECK_LOGIN_STATE_SUCCESS,
  SET_PUBLIC_STATE,
  START_SESSION,
  START_SESSION_SUCCESS
} from '../actions/loginStatus'

let initialState = {
  isFetching: false,
  authorization: 'public',
  currentUser: {},
  authResponse: {}
}

const session = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_STATE:
      return Object.assign({}, state, { isFetching: true })
    case CHECK_LOGIN_STATE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        authResponse: action.authResponse
      })
    case START_SESSION:
      return Object.assign({}, state, { authResponse: {} })
    case START_SESSION_SUCCESS:
      return Object.assign({}, state, { currentUser: action.currentUser })
    case SET_PUBLIC_STATE:
      return state
    default:
      return state
  }
}

export default session
