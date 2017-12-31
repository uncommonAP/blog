import React, { Component } from 'react'
import { connect } from 'react-redux'
import ShowTile from '../../sharedResources/components/ShowTile'
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

class ArticleShowAdminContainer extends Component {
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

const ArticleShowAdmin = connect(
  mapStateToProps, mapDispatchToProps
)(ArticleShowAdminContainer)

export default ArticleShowAdmin
