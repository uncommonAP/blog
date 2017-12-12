Rails.application.routes.draw do
  root 'static_files#index'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
      resources :articles, only:[:index, :show]
    end
  end

  get '*path', to: 'static_files#index'
end
