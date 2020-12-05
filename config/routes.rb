# == Route Map
#
#      Prefix Verb   URI Pattern               Controller#Action
#        root GET    /                         static_pages#root
#   api_users GET    /api/users(.:format)      api/users#index {:format=>:json}
#             POST   /api/users(.:format)      api/users#create {:format=>:json}
#    api_user GET    /api/users/:id(.:format)  api/users#show {:format=>:json}
#             PATCH  /api/users/:id(.:format)  api/users#update {:format=>:json}
#             PUT    /api/users/:id(.:format)  api/users#update {:format=>:json}
#  api_albums GET    /api/albums(.:format)     api/albums#index {:format=>:json}
#             POST   /api/albums(.:format)     api/albums#create {:format=>:json}
#   api_album GET    /api/albums/:id(.:format) api/albums#show {:format=>:json}
#             PATCH  /api/albums/:id(.:format) api/albums#update {:format=>:json}
#             PUT    /api/albums/:id(.:format) api/albums#update {:format=>:json}
#             DELETE /api/albums/:id(.:format) api/albums#destroy {:format=>:json}
# api_session DELETE /api/session(.:format)    api/sessions#destroy {:format=>:json}
#             POST   /api/session(.:format)    api/sessions#create {:format=>:json}

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: %i[index show create update]
    resources :albums, only: %i[index show create update destroy]
    # resources :tracks, only: %i[show]
    resource :session, only: %i[create destroy]
  end
end
