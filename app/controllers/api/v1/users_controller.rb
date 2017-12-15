class Api::V1::UsersController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def create
    if User.find_by(uid: params[:user][:uid], name: params[:user][:name]).nil?
      user = User.from_facebook(user_params)
      sign_in(user)
      render json: current_user
    else
      user = User.find_by(uid: params[:user][:uid], name: params[:user][:name])
      sign_in(user)
      render json: current_user
    end
  end

  def check_session
    if current_user.nil?
      render json: { public: true }
    else
      render json: current_user
    end
  end

  def sign_in(user)
    session[:user_id] = user.id
  end

  def sign_out
    session[:user_id] = nil
  end

  private

  def user_params
    params.require(:user).permit(:uid, :name, :oauth_token, :oauth_expires_at)
  end
end
