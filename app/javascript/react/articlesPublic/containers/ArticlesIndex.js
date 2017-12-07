import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return { articles: state.articles.articles }
}

class ArticlesIndexContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let articleListItem = this.props.articles.map((article, index) => {
      return(
        <li key={index}>{article.title}</li>
      )
    })
    return(
      <ul>
        {articleListItem}
      </ul>
    )
  }
}

const ArticlesIndex = connect(mapStateToProps, null)(ArticlesIndexContainer)

export default ArticlesIndex
