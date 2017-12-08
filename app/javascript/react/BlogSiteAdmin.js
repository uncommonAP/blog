import React, { Component } from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import ArticlesIndexAdmin from './articlesAdmin/containers/ArticlesIndexAdmin'
import ArticleShowAdmin from './articlesAdmin/containers/ArticlesIndexAdmin'
import NewArticle from './articlesAdmin/containers/NewArticle'

class BlogSiteAdmin extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Switch>
          <Route strict path='admin/articles/' component={ArticlesIndexAdmin} />
          <Route strict path='admin/show/:id/' component={ArticleShowAdmin} />
          <Route strict path='admin/create' component={NewArticle} />
          Welcome to your blog site! What would you like to do?
        </Switch>

      </div>
    )
  }
}

export default BlogSiteAdmin
