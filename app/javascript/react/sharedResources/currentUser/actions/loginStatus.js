export const CHECK_LOGIN_STATE = 'CHECK_LOGIN_STATE'
export const CHECK_LOGIN_STATE_SUCCESS = 'CHECK_LOGIN_STATE_SUCCESS'
export const PUBLIC_STATE = 'PUBLIC_STATE'

let checkLoginState = () => {
  type: CHECK_LOGIN_STATE
}

let checkLoginStateSuccess = currentUser => {
  type: CHECK_LOGIN_STATE_SUCCESS,
  authResponse
}

let publicState = () => {
  type: PUBLIC_STATE
}

let getLoginStatus = () => dispatch => {
  dispatch(checkLoginState())
  return FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
      let authResponse = response.authResponse
      FB.api('/me', function(response) {
        authResponse["name"] = response.name
      })
      serializePayload(authResponse)
    } else {
      dispatch(publicState())
    }
  })
}

let serializePayload = authResponse => {
  let userPayLoad = {user: {
    uid: authResponse.userId,
    name: authResponse.name,
    oauth_token: authResponse.accessToken,
    oauth_expires_at: authResponse.expiresIn
  }}
  startUserSession(userPayLoad)
}

let startUserSession = userPayLoad => dispatch => {
  return fetch('api/v1/users', {
    method: 'POST',
    body: JSON.stringify(authResponse),
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}
  }) .then(response => response.json())
  .then(currentUser => {
    dispatch(checkLoginStateSuccess(currentUser))
  })
}

export {
  getLoginStatus
}
