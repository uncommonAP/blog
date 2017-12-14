import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSessionStatus, startUserSession } from './sharedResources/currentUser/actions/loginStatus'

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    authResponse: state.session.authResponse
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSessionStatus: () => { dispatch(getSessionStatus()) },
    getFbLoginStatus: () => { dispatch(getFbLoginStatus()) },
    startUserSession: (authResponse) => { dispatch(startUserSession(authResponse))}
  }
}

class UserProfileContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getSessionStatus()
  }

  componentDidUpdate() {
    if (Object.keys(this.props.authResponse).length > 0) {
      this.props.startUserSession(this.props.authResponse)
    } else if (this.props.currentUser.public) {
      this.props.getFbLoginStatus()
    }
  }

  render(){
    let welcomeMessage
    if (this.props.currentUser.name) {
      welcomeMessage = <div>Welcome {this.props.currentUser.name}!</div>
    }
    return(
      <div>
        <div className="fb-login-button"
          data-max-rows="1"
          data-size="large"
          data-button-type="continue_with"
          data-show-faces="false"
          data-auto-logout-link="true"
          data-use-continue-as="true">
        </div>
        {welcomeMessage}
      </div>
    )
  }
}

const UserProfile = connect(
  mapStateToProps, mapDispatchToProps
)(UserProfileContainer)

export default UserProfile
