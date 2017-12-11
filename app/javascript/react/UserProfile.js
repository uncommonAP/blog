import React, { Component } from 'react'

class UserProfile extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className="fb-login-button"
        data-max-rows="1"
        data-size="large"
        data-button-type="continue_with"
        data-show-faces="false"
        data-auto-logout-link="false"
        data-use-continue-as="false"
      ></div>
    )
  }
}

export default UserProfile
