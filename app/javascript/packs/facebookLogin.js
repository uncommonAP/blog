import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import UserProfile from '../react/UserProfile'
import getLoginStatus from '../react/sharedResources/currentUser/actions/loginStatus'
import currentUser from '../react/sharedResources/currentUser/reducers/currentUser'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({ currentUser }),
  applyMiddleware(...middlewares)
)

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : 925125067638104,
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.AppEvents.logPageView()

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
  console.log('Welcome!  Fetching your information.... ');
  FB.api('/me', function(response) {
    console.log('Successful login for: ' + response.name);
    document.getElementById('status').innerHTML =
    'Thanks for logging in, ' + response.name + '!';
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><UserProfile /></Provider>,
    document.getElementById('status')
  );
})
