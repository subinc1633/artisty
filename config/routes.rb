Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resources :items, only: [:show]
    resources :shops, only: [:show]
    resources :categories, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
end