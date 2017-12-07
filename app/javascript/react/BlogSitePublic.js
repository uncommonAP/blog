import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import ArticlesIndex from './articlesPublic/containers/ArticlesIndex'
import ArticleShow from './articlesPublic/containers/ArticleShow'

class BlogSitePublic extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Switch>
          <Route strict path={`${this.props.match.path}show/`} component={ArticleShow}/>
          <div>This is just a placeholder!</div>
          <ArticlesIndex />
        </Switch>
      </div>
    )
  }
}

export default BlogSitePublic
