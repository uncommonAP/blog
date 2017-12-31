import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArticle } from '../../sharedResources/articles/actions/getArticle'
import ShowTile from '../../sharedResources/components/ShowTile'

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
      <ShowTile article={this.props.article} />
    )
  }
}

const ArticleShow = connect(
  mapStateToProps, mapDispatchToProps
)(ArticleShowContainer)

export default ArticleShow
