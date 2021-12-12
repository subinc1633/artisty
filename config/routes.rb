Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create] do
      resources :carts, only: [:show, :create]
    end
    resources :items, only: [:index, :show] do
      resources :reviews, only: [:create, :update]
    end
    resources :shops, only: [:index, :show]
    resources :categories, only: [:index, :show]
    resources :reviews, only: [:index, :show, :destroy]
    resources :carts, only: [:show, :create] do
      resources :cart_items, only: [:index, :show, :create, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
end