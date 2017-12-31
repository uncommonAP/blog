import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPublishedArticles } from './sharedResources/articles/actions/getPublishedArticles'
import BlogSiteAdmin from './BlogSiteAdmin'

const mapDispatchToProps = dispatch => {
  return {
    getPublishedArticles: () => { dispatch(getPublishedArticles()) }
  }
}

class AdminLandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getPublishedArticles()
  }

  render() {
    return(
      <BrowserRouter>
        <BlogSiteAdmin />
      </BrowserRouter>
    )
  }
}

const AdminLanding = connect(null, mapDispatchToProps)(AdminLandingContainer)

export default AdminLanding
