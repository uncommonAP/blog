export const CHECK_LOGIN_STATE = 'CHECK_LOGIN_STATE'
export const CHECK_LOGIN_STATE_SUCCESS = 'CHECK_LOGIN_STATE_SUCCESS'
export const SET_PUBLIC_STATE = 'SET_PUBLIC_STATE'
export const START_SESSION = 'START_SESSION'
export const START_SESSION_SUCCESS = 'START_SESSION_SUCCESS'
export const SHOW_LOGIN_MESSAGE = 'SHOW_LOGIN_MESSAGE'
export const CHECK_SESSION_STATUS = 'CHECK_SESSION_STATUS'

let checkLoginState = () => {
  return {
    type: CHECK_LOGIN_STATE
  }
}

let checkLoginStateSuccess = authResponse => {
  return {
    type: CHECK_LOGIN_STATE_SUCCESS,
    authResponse
  }
}

let checkSessionStatus = () => {
  return {
    type: CHECK_SESSION_STATUS
  }
}

let startSession = () => {
  return {
    type: START_SESSION
  }
}

let startSessionSuccess = currentUser => {
  return {
    type: START_SESSION_SUCCESS,
    currentUser
  }
}

let setPublicState = isPublic => {
  return {
    type: SET_PUBLIC_STATE,
    isPublic
  }
}

let showLoginMessage = message => {
  return {
    type: SHOW_LOGIN_MESSAGE,
    message
  }
}

let getSessionStatus = () => dispatch => {
  dispatch(checkSessionStatus())
  return fetch('/api/v1/users/check_session.json', {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(body => {
    if (body.user) {
      dispatch(startSessionSuccess(body.user))
    } else if (body.public){
      dispatch(setPublicState(body))
    }
  })
}

let getFbLoginStatus = () => dispatch => {
  dispatch(checkLoginState())
  return FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      let incompleteResponse = response.authResponse
      FB.api('/me', function(profile) {
        let authResponse = Object.assign({}, incompleteResponse, profile)
        dispatch(checkLoginStateSuccess(authResponse))
      })
    } else {
      let message = "Please log in to continue"
      dispatch(showLoginMessage(message))
    }
  })
}

let serializePayload = authResponse => {
  let userPayLoad = {user: {
    uid: authResponse.id,
    name: authResponse.name,
    oauth_token: authResponse.accessToken,
    oauth_expires_at: authResponse.expiresIn
  }}
  return userPayLoad
}

let startUserSession = authResponse => dispatch => {
  dispatch(startSession())
  let payLoad = serializePayload(authResponse)
  return fetch('/api/v1/users.json', {
    method: 'POST',
    body: JSON.stringify(payLoad),
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(currentUser => {
    dispatch(startSessionSuccess(currentUser))
  })
}

export {
  getSessionStatus,
  getFbLoginStatus,
  startUserSession
}
