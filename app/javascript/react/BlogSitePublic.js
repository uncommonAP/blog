import React, { Component } from 'react'
import ArticlesIndex from './articlesIndex/containers/ArticlesIndex'

class BlogSitePublic extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <div>This is just a placeholder!</div>
        <ArticlesIndex />
      </div>
    )
  }
}

export default BlogSitePublic
