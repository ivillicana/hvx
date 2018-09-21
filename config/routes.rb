Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/signup', to: 'users#create'

  get '/breakfast-and-brunch', to: "yelp#fetch_breakfast_and_brunch"
  get '/dinner', to: "yelp#fetch_dinner"

  get '/activities/museums', to: "foursquare#fetch_museums"
  get '/activities/nature', to: "foursquare#fetch_nature"
  get '/activities/performing-arts', to: "foursquare#fetch_performing_arts"
end
