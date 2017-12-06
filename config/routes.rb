Rails.application.routes.draw do
  root 'static_files#index'

  namespace :api do
    namespace :v1 do
      resources :articles, only:[:index]
    end
  end
end
