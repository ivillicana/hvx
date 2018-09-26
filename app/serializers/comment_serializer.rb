class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id, :user_name, :user_location
  belongs_to :post 
  belongs_to :user
end
