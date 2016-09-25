Rails.application.routes.draw do
  root "static_page#root"

  namespace :api, default: {format: :json} do
    resources :sessions, only: [:create, :destroy]
    resources :users, only: [:create, :destroy, :update, :show]
  end
end
