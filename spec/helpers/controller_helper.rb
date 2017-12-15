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
    admin_user(user)
    controller.stub(:current_user).and_return(user)
  end

  def admin_user(user)
    user.stub(:admin? => true)
  end

  def log_in_as_user_public(user)
    public_user = double(:user, :admin? => false)
    controller.stub(:current_user) { public_user }
  end

  def patch_parser(controller_method, method_params = nil)
    patch controller_method, params: method_params
    JSON.parse(response.body, symbolize_names: true)
  end

end
