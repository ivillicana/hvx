class FoursquareController < ApplicationController

  def fetch_museums
    resp = Faraday.get ('https://api.foursquare.com/v2/venues/search?v=20180901&client_id=LQNOSRRVHAJZ5Q5KNHA1RTZIEJGXOVL5PLPDL2W01C1YVSOH&client_secret=FEUHT5YBBJYSTL5FKN0KFWK2SSD4THW3VKHXJXBFACAKWBM2&near=12550&intent=browse&radius=50000&limit=5&categoryId=4bf58dd8d48988d181941735')
    body = JSON.parse(resp.body)
    museums = body['response']['venues']
    json_response(museums)
  end

  def fetch_performing_arts
    resp = Faraday.get ('https://api.foursquare.com/v2/venues/search?v=20180901&client_id=LQNOSRRVHAJZ5Q5KNHA1RTZIEJGXOVL5PLPDL2W01C1YVSOH&client_secret=FEUHT5YBBJYSTL5FKN0KFWK2SSD4THW3VKHXJXBFACAKWBM2&near=12550&intent=browse&radius=50000&limit=5&categoryId=4bf58dd8d48988d135941735,4bf58dd8d48988d136941735,4bf58dd8d48988d137941735')
    body = JSON.parse(resp.body)
    centers = body['response']['venues']
    json_response(centers)
  end

  def fetch_nature
    resp = Faraday.get ('https://api.foursquare.com/v2/venues/search?v=20180901&client_id=LQNOSRRVHAJZ5Q5KNHA1RTZIEJGXOVL5PLPDL2W01C1YVSOH&client_secret=FEUHT5YBBJYSTL5FKN0KFWK2SSD4THW3VKHXJXBFACAKWBM2&near=12550&intent=browse&radius=50000&limit=5&categoryId=52e81612bcbc57f1066b7a21,52e81612bcbc57f1066b7a13,4bf58dd8d48988d165941735')
    body = JSON.parse(resp.body)
    centers = body['response']['venues']
    json_response(centers)
  end
end
