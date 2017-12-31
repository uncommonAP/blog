export const TOGGLE_ARTICLE_VIEW = 'TOGGLE_ARTICLE_VIEW'

let toggleArticleView = view => {
  return {
    type: TOGGLE_ARTICLE_VIEW,
    view
  }
}

export {
  toggleArticleView
}
