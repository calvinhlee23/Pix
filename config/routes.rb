Rails.application.routes.draw do
  root "static_page#index"

  namespace :api, default: {format: :json} do
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :update, :show]
    resources :images, only: [:create, :destroy, :show]
    resources :comments, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
  end
end
