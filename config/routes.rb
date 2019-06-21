Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
    resources :items, only: [:index, :show]

  end
end

root 'homes#index'
get 'items/:id', to: 'homes#index'
end
