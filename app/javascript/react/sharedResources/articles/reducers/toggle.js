import { TOGGLE_ARTICLE_VIEW } from '../actions/Toggles'

let intitialState = {
  view: 'drafts'
}

const toggle = (state = intitialState, action) => {
  switch (action.type) {
    case TOGGLE_ARTICLE_VIEW:
      return Object.assign({}, state, { view: action.view })
    default:
      return state
  }
}

export default toggle
