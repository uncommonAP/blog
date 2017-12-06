import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllArticles } from './articlesIndex/actions/getAllArticles'
import BlogSitePublic from './BlogSitePublic'

const mapDispatchToProps = dispatch => {
  return {
    getAllArticles: () => { dispatch(getAllArticles()) }
  }
}

class BlogSiteContainer extends Component {
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

const BlogSite = connect(null, mapDispatchToProps)(BlogSiteContainer)

export default BlogSite
