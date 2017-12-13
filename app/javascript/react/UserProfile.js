import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLoginStatus, startUserSession } from './sharedResources/currentUser/actions/loginStatus'

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    authResponse: state.session.authResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getLoginStatus: () => { dispatch(getLoginStatus()) },
    startUserSession: (authResponse) => { dispatch(startUserSession(authResponse))}
  }
}

class UserProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getLoginStatus()
  }

  componentDidUpdate() {
    if (Object.keys(this.props.authResponse).length > 0) {
      debugger
      this.props.startUserSession(this.props.authResponse)
    }
  }

  render(){
    return(
      <div>
        <div className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          ></div>
          <div>Welcome {this.props.currentUser.name}!</div>
      </div>
    )
  }
}

const UserProfile = connect(
  mapStateToProps, mapDispatchToProps
)(UserProfileContainer)

export default UserProfile
