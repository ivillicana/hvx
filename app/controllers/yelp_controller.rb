
class YelpController < ApplicationController
  require 'faraday'
  require 'json'

  #change to environment variable

  def fetch_breakfast_and_brunch
    resp = Faraday.get ('https://api.yelp.com/v3/businesses/search?categories=breakfast_brunch&sort_by=rating&location=newburgh&radius=40000&limit=10') do |req|
      req.headers['Authorization'] = "Bearer GX_Sex34bJpD58wcxXMLluz0wksabbmzFQ2Tk1TGfPY3TmUJRsMMyW3gd7b0pLQoHs5X1ffG4HyCQXlVcCPtuIWez4AetJZsLDebPv4JJK0YPD2ou-litu4smbSjW3Yx"
    end
    body = JSON.parse(resp.body)
    restaurants = body['businesses']
    render json: restaurants, status: 200
  end

  def fetch_dinner
    resp = Faraday.get ('https://api.yelp.com/v3/businesses/search?term=dinner&categories=restaurants&location=newburgh&radius=40000&limit=10') do |req|
      req.headers['Authorization'] = "Bearer GX_Sex34bJpD58wcxXMLluz0wksabbmzFQ2Tk1TGfPY3TmUJRsMMyW3gd7b0pLQoHs5X1ffG4HyCQXlVcCPtuIWez4AetJZsLDebPv4JJK0YPD2ou-litu4smbSjW3Yx"
    end
    body = JSON.parse(resp.body)
    restaurants = body['businesses']
    render json: restaurants, status: 200
  end

  def fetch_drinks
    resp = Faraday.get ('https://api.yelp.com/v3/businesses/search?categories=bars&location=newburgh&radius=40000&limit=10&sort_by=rating') do |req|
      req.headers['Authorization'] = "Bearer GX_Sex34bJpD58wcxXMLluz0wksabbmzFQ2Tk1TGfPY3TmUJRsMMyW3gd7b0pLQoHs5X1ffG4HyCQXlVcCPtuIWez4AetJZsLDebPv4JJK0YPD2ou-litu4smbSjW3Yx"
    end
    body = JSON.parse(resp.body)
    restaurants = body['businesses']
    render json: restaurants, status: 200
  end

  def fetch_events
    resp = Faraday.get ('https://api.yelp.com/v3/businesses/search?term=dinner&categories=restaurants&location=newburgh&radius=40000&limit=10') do |req|
      req.headers['Authorization'] = "Bearer GX_Sex34bJpD58wcxXMLluz0wksabbmzFQ2Tk1TGfPY3TmUJRsMMyW3gd7b0pLQoHs5X1ffG4HyCQXlVcCPtuIWez4AetJZsLDebPv4JJK0YPD2ou-litu4smbSjW3Yx"
    end
    body = JSON.parse(resp.body)
    restaurants = body['businesses']
    render json: restaurants, status: 200
  end

  def fetch_restaurant
    resp = Faraday.get ("https://api.yelp.com/v3/businesses/#{params[:restaurantId]}") do |req|
      req.headers['Authorization'] = "Bearer GX_Sex34bJpD58wcxXMLluz0wksabbmzFQ2Tk1TGfPY3TmUJRsMMyW3gd7b0pLQoHs5X1ffG4HyCQXlVcCPtuIWez4AetJZsLDebPv4JJK0YPD2ou-litu4smbSjW3Yx"
    end
    restaurant = JSON.parse(resp.body)
    render json: restaurant, status: 200
  end

end