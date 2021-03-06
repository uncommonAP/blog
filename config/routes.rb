Rails.application.routes.draw do

  scope :admin do
    get '/', to: 'admin_files#admin'
    get '*path', to: 'admin_files#admin'
  end

  root 'public_files#index'
  get '/sign_out', to: 'api/v1/users#sign_out'

  namespace :api do
    namespace :v1 do
      namespace :admin do
        patch '/articles/publish/:id', to: 'articles#publish'
        get '/articles/draft_index'
        resources :articles, except: [:index, :show]
      end

      get '/users/check_session'
      resources :users, only: [:create]
      resources :articles, only:[:index, :show]
    end
  end

  get '*path', to: 'public_files#index'
end
