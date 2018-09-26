Rails.application.routes.draw do

  resources :posts do
    resources :comments
  end

  get '/user', to: 'users#show'
  
  post 'auth/login', to: 'authentication#authenticate'
  post 'signup', to: 'users#create'

  get '/breakfast-and-brunch', to: "yelp#fetch_breakfast_and_brunch"
  get '/dinner', to: "yelp#fetch_dinner"
  get '/drinks', to: "yelp#fetch_drinks"
  get '/eat-drink/:restaurantId', to: "yelp#fetch_restaurant"

  get '/activities/museums', to: "foursquare#fetch_museums"
  get '/activities/nature', to: "foursquare#fetch_nature"
  get '/activities/performing-arts', to: "foursquare#fetch_performing_arts"
end
