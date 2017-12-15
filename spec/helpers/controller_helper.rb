require 'json'

module ControllerHelper
  def get_parsed(controller_method)
    get controller_method
    body = JSON.parse(response.body, symbolize_names: true)
    return body
  end

  def get_show(id)
    get :show, params: { id: id }
    JSON.parse(response.body, symbolize_names: true)
  end

  def create_parser(params)
    post :create, params: params
    JSON.parse(response.body, symbolize_names: true)
  end

  def log_in_as_user_admin(user)
    admin_user = double(:user, :admin? => true)
    controller.stub(:current_user) { admin_user }
  end

  def log_in_as_user_public(user)
    public_user = double(:user, :admin? => false)
    controller.stub(:current_user) { public_user }
  end

end
