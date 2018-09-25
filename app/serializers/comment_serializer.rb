class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :post_id, :user_id
  belongs_to :post 
  belongs_to :user
end
