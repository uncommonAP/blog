class Api::V1::ArticlesController < ApplicationController
  def index
    render json: { articles: Article.all }
  end
end
