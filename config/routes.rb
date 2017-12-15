Rails.application.routes.draw do

  scope :admin do
    get '/', to: 'admin_files#admin'
    get '*path', to: 'admin_files#admin'
  end

  root 'public_files#index'

  namespace :api do
    namespace :v1 do
      get '/users/check_session'
      resources :users, only: [:create]
      resources :articles, only:[:index, :show]
    end
  end

  get '*path', to: 'public_files#index'
end
