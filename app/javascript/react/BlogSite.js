import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllArticles } from './articlesPublic/actions/getAllArticles'
import BlogSitePublic from './BlogSitePublic'
import BlogSiteAdmin from './BlogSiteAdmin'

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
    let renderSwitch
    if (this.props.type === 'public') {
      renderSwitch = <BlogSitePublic />
    } else if (this.props.type === 'admin') {
      renderSwitch = <BlogSiteAdmin />
    }
    return(
      <BrowserRouter>
        {renderSwitch}
      </BrowserRouter>
    )
  }
}

const BlogSite = connect(null, mapDispatchToProps)(BlogSiteContainer)

export default BlogSite
