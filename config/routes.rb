Rails.application.routes.draw do
  root "static_page#index"

  namespace :api, default: {format: :json} do
    resource :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :update, :show]
    resources :images, only: [:create, :destroy, :show]
  end
end
