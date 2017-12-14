Rails.application.routes.draw do

  scope :admin do
    get '/', to: 'static_files#admin'
    get '*path', to: 'static_files#admin'
  end

  root 'static_files#index'

  namespace :api do
    namespace :v1 do
      get '/users/check_session'
      resources :users, only: [:create]
      resources :articles, only:[:index, :show]
    end
  end

  get '*path', to: 'static_files#index'
end
