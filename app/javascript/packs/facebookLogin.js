import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import UserProfile from '../react/UserProfile'

import session from '../react/sharedResources/currentUser/reducers/currentUser'

const middlewares = [thunkMiddleware]

const store = createStore(
  combineReducers({ session }),
  applyMiddleware(...middlewares)
)


window.fbAsyncInit = function() {
  FB.init({
    appId      : 925125067638104,
    cookie     : true,
    xfbml      : true,
    version    : 'v2.8'
  });

  FB.AppEvents.logPageView()
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}><UserProfile /></Provider>,
    document.getElementById('status')
  );
})
