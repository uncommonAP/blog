import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toggleArticle } from '../../sharedResources/actions/getArticle'

const mapStateToProps = state => {
  return { articles: state.articles.articles }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleArticle: (id) => { dispatch(toggleArticle(id)) }
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
        <div key={index} className="article-index-tile">
          <NavLink to={`${this.props.match.path}/show/${article.id}`} id={article.id} onClick={this.handleClick}>
            {article.title}
          </NavLink><br />
          Created: {article.created}<br/> Updated: {article.updated}
        </div>
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
