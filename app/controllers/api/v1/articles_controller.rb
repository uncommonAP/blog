class Api::V1::ArticlesController < ApplicationController
  def index
    render json: Article.all, scope: :index
  end

  def show
    render json: Article.find(params[:id]), scope: :show
  end
end
