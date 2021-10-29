Rails.application.routes.draw do
  root to: 'static_pages#root'
  
  resources :users, only: [:create]
  resource :session, only: [:create, :destroy]
end