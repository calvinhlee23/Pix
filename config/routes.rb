Rails.application.routes.draw do
  root "static_page#index"

  namespace :api, default: {format: :json} do
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :update, :show]
    resources :images, only: [:create, :destroy, :show]
    get "/images/myImages", to: 'images#my_images'
    get "/images/followingImages", to: 'images#following_images'
    get "/images/publicImages", to: 'images#public_images'
    resources :comments, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy]
  end
end
