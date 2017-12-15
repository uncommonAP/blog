import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticle } from '../../sharedResources/articles/actions/getArticle'

const mapStateToProps = state => {
  return {
    article: state.article.article
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getArticle: (id) => { dispatch(getArticle(id)) }
  }
}

class ArticleShowContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getArticle(this.props.match.params.id)
  }

  render() {
    return(
      <div className="article-show">
        <h1>{this.props.article.title}</h1>
        Created: {this.props.article.created}<br/>
        Last Updated: {this.props.article.updated}
        <hr />
        <div className="article-body">{this.props.article.body}</div>
      </div>
    )
  }
}

const ArticleShow = connect(
  mapStateToProps, mapDispatchToProps
)(ArticleShowContainer)

export default ArticleShow
