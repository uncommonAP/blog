class Api::V1::ArticlesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Article.all.where(published: true), scope: :index
  end

  def show
    render json: Article.find(params[:id]), scope: :show
  end

  def create
    article = Article.new(article_params)
    if article.save
      render json: article
    end
  end

  private

  def article_params
    params.require(:article).permit(:title, :body)
  end
end
