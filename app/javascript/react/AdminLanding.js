import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllArticles } from './sharedResources/actions/getAllArticles'
import BlogSiteAdmin from './BlogSiteAdmin'

const mapDispatchToProps = dispatch => {
  return {
    getAllArticles: () => { dispatch(getAllArticles()) }
  }
}

class AdminLandingContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getAllArticles()
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
