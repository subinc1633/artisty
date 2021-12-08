Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create] do
      resources :carts, only: [:show, :create]
    end
    resources :items, only: [:index, :show] do
      resources :reviews, only: [:create, :update]
    end
    resources :shops, only: [:show]
    resources :categories, only: [:index, :show]
    resources :reviews, only: [:index, :show, :destroy]
    resources :cart_items, only: [:show, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end
end