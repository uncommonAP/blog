export const CHECK_LOGIN_STATE = 'CHECK_LOGIN_STATE'
export const CHECK_LOGIN_STATE_SUCCESS = 'CHECK_LOGIN_STATE_SUCCESS'
export const SET_PUBLIC_STATE = 'SET_PUBLIC_STATE'
export const START_SESSION = 'START_SESSION'
export const START_SESSION_SUCCESS = 'START_SESSION_SUCCESS'

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

let setPublicState = () => {
  return {
    type: PUBLIC_STATE
  }
}

let getLoginStatus = () => dispatch => {
  dispatch(checkLoginState())
  return FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      let authResponse = response.authResponse
      FB.api('/me', function(profile) {
        let authResponse = Object.assign({}, response.authResponse, profile)
        dispatch(checkLoginStateSuccess(authResponse))
      })
    } else {
      dispatch(setPublicState())
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
  return fetch('api/v1/users.json', {
    method: 'POST',
    body: JSON.stringify(payLoad),
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(currentUser => {
    debugger
    dispatch(startSessionSuccess(currentUser))
  })
}

export {
  getLoginStatus,
  startUserSession
}
