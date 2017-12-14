class AdminFilesController < ApplicationController
  before_action :verify_admin

  private
  def verify_admin
    if !current_user.admin?
      redirect_to root_path
    end
  end
  helper_method :verify_admin
end
