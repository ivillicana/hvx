
class YelpController < ApplicationController
  require 'faraday'
  require 'json'

  #change to environment variable

  def fetch_breakfast_and_brunch
    resp = Faraday.get ('https://api.yelp.com/v3/businesses/search?location=newburgh&categories=breakfast_brunch&sort_by=rating&radius=40000') do |req|
      req.headers['Authorization'] = 'Bearer GX_Sex34bJpD58wcxXMLluz0wksabbmzFQ2Tk1TGfPY3TmUJRsMMyW3gd7b0pLQoHs5X1ffG4HyCQXlVcCPtuIWez4AetJZsLDebPv4JJK0YPD2ou-litu4smbSjW3Yx'
    end
    body = JSON.parse(resp.body)
    restaurants = body['businesses']
    json_response(restaurants)
  end


end