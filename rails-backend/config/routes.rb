Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :cats do
        resources :gadgets
      end
    end 
  end
 
end