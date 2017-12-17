import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleArticle } from '../../sharedResources/articles/actions/getArticle'
import IndexTile from '../../sharedResources/components/IndexTile'

const mapStateToProps = state => {
  return { articles: state.articles.articles }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

class ArticlesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.toggleArticle(event.target.id)
  }

  render() {
    let articleListItem = this.props.articles.map((article, index) => {
      return(
        <IndexTile key={`pub${index}`} article={article} path={`${this.props.match.path}show/${article.id}/`} handleClick={this.handleClick}/>
      )
    })
    return(
      <div className="article-index">
        <h1>Article Index</h1>
      <div>
        {articleListItem}
      </div>
    </div>
    )
  }
}

const ArticlesIndex = connect(mapStateToProps, mapDispatchToProps)(ArticlesIndexContainer)

export default ArticlesIndex
