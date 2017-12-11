import { CHECK_LOGIN_STATE, CHECK_LOGIN_STATE_SUCCESS, PUBLIC_STATE } from '../actions/loginStatus'

let initialState = {
  isFetching: false,
  currentUser: 'publicUser',
  authResponse: {}
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_STATE:
      return Object.assign({}, state, { isFetching: true })
    case CHECK_LOGIN_STATE_SUCCESS:
        return Object.assign({}, state, {
          isFetching: false,
          currentUser: action.currentUser
        })
    case PUBLIC_STATE:
      return state
    default:
      return state
  }
}

export default currentUser
