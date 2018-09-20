Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/signup', to: 'users#create'

  get '/breakfast-and-brunch', to: "yelp#fetch_breakfast_and_brunch"
end
