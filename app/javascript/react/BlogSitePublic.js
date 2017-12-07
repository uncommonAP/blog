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
          <Route strict path={`/articles/show/:id`} component={ArticleShow}/>
          <Route exact path={`/articles`} component={ArticlesIndex}/>
          <NavLink to='/articles'><button>See all Articles</button></NavLink>
          <div>This is just a placeholder!</div>
        </Switch>
      </div>
    )
  }
}

export default BlogSitePublic
