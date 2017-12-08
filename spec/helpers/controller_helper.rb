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
end
