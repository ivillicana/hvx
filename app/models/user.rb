class User < ApplicationRecord
  has_secure_password

  has_many :posts
  has_many :comments

  validates_presence_of :name, :email, :password_digest, :location
end
