import React from 'react'
import { NavLink } from 'react-router-dom'

const IndexTile = props => {
  return(
    <div className="article-index-tile">
      <NavLink to={props.path} id={props.article.id} onClick={props.handleClick}>
        {props.article.title}
      </NavLink><br />
      Created: {props.article.created}<br/> Updated: {props.article.updated}
    </div>
  )
}

export default IndexTile
