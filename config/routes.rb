Rails.application.routes.draw do
  get 'profile' => 'profile#index'
  patch 'profile' => 'profile#update'

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end