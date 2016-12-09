Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session
    resources :profiles, only: [:update] do
      collection do
        get ':email', to: "profiles#show"
      end
    end
  end
end
