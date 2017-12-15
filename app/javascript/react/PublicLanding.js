import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllArticles } from './sharedResources/articles/actions/getAllArticles'
import BlogSitePublic from './BlogSitePublic'

const mapDispatchToProps = dispatch => {
  return {
    getAllArticles: () => { dispatch(getAllArticles()) }
  }
}

class PublicLandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getAllArticles()
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
