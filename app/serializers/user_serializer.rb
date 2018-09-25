class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :location
  has_many :posts
  has_many :comments
end
