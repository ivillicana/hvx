class Comment < ApplicationRecord
  belongs_to :post
  belongs_to :user

  validates_presence_of :content

  def user_name
    self.user ? self.user.name : nil
  end

  def user_location
    self.user ? self.user.location : nil
  end
end
