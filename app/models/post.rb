class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user

  validates_presence_of :title, :content
end

