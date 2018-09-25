class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :created_at, :user_id
  belongs_to :user
  has_many :comments
end
