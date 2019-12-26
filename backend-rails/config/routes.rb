Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :recipes do
        resources :recipe_steps
      end

      resource :auth, only: %i[create]
    end
  end
end
