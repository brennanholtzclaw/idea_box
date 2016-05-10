Rails.application.routes.draw do
  root to: 'ideas#index'

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      # get '/ideas', to: 'ideas#index'
      # post '/ideas', to: 'ideas#create'
      # get '/ideas/new', to: 'ideas#new'
      # get '/ideas/:id/edit', to: 'ideas#edit'
      # get '/ideas/:id', to: 'ideas#show'
      # patch '/ideas/:id', to: 'ideas#update'
      # put '/ideas/:id', to: 'ideas#update'
      # delete '/ideas/:id', to: 'ideas#destroy'
      resources :ideas
    end
  end
end
