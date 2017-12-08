Rails.application.routes.draw do
  root 'static_files#index'
  get '/admin', to: 'static_files#admin'

  namespace :api do
    namespace :v1 do
      resources :articles, only:[:index, :show, :create]
    end
  end

  get '*path', to: 'static_files#index'
end
