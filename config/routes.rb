Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users, only: [:create, :show]
  resources :topics do
    resources :responses, only: :create
  end
  resources :responses, except: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
