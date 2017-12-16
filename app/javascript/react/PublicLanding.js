import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPublishedArticles } from './sharedResources/articles/actions/getPublishedArticles'
import BlogSitePublic from './BlogSitePublic'

const mapDispatchToProps = dispatch => {
  return {
    getPublishedArticles: () => { dispatch(getPublishedArticles()) }
  }
}

class PublicLandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getPublishedArticles()
  }

  render() {
    return(
      <BrowserRouter>
        <BlogSitePublic />
      </BrowserRouter>
    )
  }
}

const PublicLanding = connect(null, mapDispatchToProps)(PublicLandingContainer)

export default PublicLanding
