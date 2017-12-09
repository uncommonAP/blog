Rails.application.routes.draw do
  get '/admin', to: 'static_files#admin'
  get '/', to: 'static_files#index'

  namespace :api do
    namespace :v1 do
      resources :articles, only:[:index, :show, :create]
    end
  end

  get '*path', to: 'static_files#index'
end
