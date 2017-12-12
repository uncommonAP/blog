class Api::V1::UsersController < ApplicationController
  def create
    if User.find_by(uid: params[:user][:uid], name: params[:user][:name]).nil?
      user = User.from_facebook(user_params)
      sign_in(user)
      render json: user
    else
      user = User.find_by(uid: params[:user][:uid], name: params[:user][:name])
      sign_in(user)
      render json: user
    end
  end

  def sign_in(user)
    session[:user_id] = user.id
  end

  def sign_out
    session[:uid] = nil
  end

  private

  def user_params
    params.require(:user).permit(:uid, :name, :oauth_token, :oauth_expires_at)
  end
end
