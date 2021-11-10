Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resources :items, only: [:index, :show] do
      resources :reviews, only: [:create, :update, :destroy]
    end
    resources :shops, only: [:show]
    resources :categories, only: [:index, :show]
    resource :session, only: [:create, :destroy]
  end
end