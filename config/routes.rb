Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    resources :friendships, only: [:show, :create, :destroy]
    resources :requests, only: [:show, :create, :destroy]
    resources :own_requests, only: [:show]
    resources :other_requests, only: [:show]
    resources :newsfeeds, only: [:show]
    resources :wall, only: [:show]
    resources :posts, only: [:create, :destroy, :update]
    resources :comments, only: [:create, :destroy, :show]
    resources :likes, only: [:create, :destroy, :show, :index]
    resources :convos, only: [:create, :update, :show]
    resources :messages, only: [:create, :show]

    resources :profiles, only: [:update, :index] do
      collection do
        get ':username', to: "profiles#show"
      end
    end
  end
end
