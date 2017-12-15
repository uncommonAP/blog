class Api::V1::Admin::ArticlesController < AdminFilesController
  before_action :verify_admin

  def create
    draft = Article.new(article_params)
    if draft.save
      render json: draft
    else
      alert messages: draft.errors.full_messages
    end
  end

  def update
    article = Article.find(params[:id])
    if article.update(article_params)
      render json: article
    end
  end

  def publish
    article = Article.find(params[:id])
    if article.publish(current_user)
      render json: article
    end
  end

  def draft_index
    articles = Article.all.where(draft: true)
    render json: articles
  end

  private

  def article_params
    params.require(:article).permit(:title, :body)
  end
end
