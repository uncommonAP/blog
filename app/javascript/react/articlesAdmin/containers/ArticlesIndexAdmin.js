import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDrafts } from '../../sharedResources/articles/actions/getDrafts'
import { toggleArticleView } from '../../sharedResources/articles/actions/Toggles'
import IndexTile from '../../sharedResources/components/IndexTile'

const mapStateToProps = state => {
  return {
    drafts: state.drafts.drafts,
    published: state.articles.articles,
    view: state.toggle.view
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getDrafts: () => { dispatch(getDrafts()) },
    toggleArticleView: (view) => { dispatch(toggleArticleView(view)) }
  }
}

class ArticlesIndexAdminContainer extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    this.props.getDrafts()
  }

  handleClick(event) {
    this.props.toggleArticleView(event.target.id)
  }

  render(){
    let articleList = this.props[this.props.view].map((article, index) => {
      return(
        <IndexTile key={`index${index}`} article={article} path={`/admin/show/${article.id}`} />
      )
    })
    return(
      <div>
        <button onClick={this.handleClick} id='drafts'>Drafts</button>
        <button onClick={this.handleClick} id='published'>Published</button>
        Showing: {this.props.view}
        {articleList}
      </div>
    )
  }
}

const ArticlesIndexAdmin = connect(mapStateToProps, mapDispatchToProps)(ArticlesIndexAdminContainer)

export default ArticlesIndexAdmin
