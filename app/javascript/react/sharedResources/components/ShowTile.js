import React from 'react'

const ShowTile = props => {
  return(
    <div className="article-show">
      <h1>{props.article.title}</h1>
      Created: {props.article.created}<br/>
      Last Updated: {props.article.updated}
      <hr />
      <div className="article-body">{props.article.body}</div>
    </div>
  )
}

export default ShowTile
