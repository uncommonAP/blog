import {
  CHECK_LOGIN_STATE,
  CHECK_LOGIN_STATE_SUCCESS,
  SET_PUBLIC_STATE,
  START_SESSION,
  START_SESSION_SUCCESS,
  CHECK_SESSION_STATUS,
  SHOW_LOGIN_MESSAGE
} from '../actions/loginStatus'

let initialState = {
  isFetching: false,
  authorization: 'public',
  currentUser: {},
  authResponse: {},
  message: ''
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
    case CHECK_SESSION_STATUS:
      return Object.assign({}, state, { isFetching: true })
    case START_SESSION:
      return Object.assign({}, state, { isFetching: true, authResponse: {} })
    case START_SESSION_SUCCESS:
      return Object.assign({}, state, { isFetching: false, currentUser: action.currentUser })
    case SET_PUBLIC_STATE:
      return Object.assign({}, state, { currentUser: action.isPublic})
    case SHOW_LOGIN_MESSAGE:
      return Object.assign({}, state, { message: action.message })
    default:
      return state
  }
}

export default session
