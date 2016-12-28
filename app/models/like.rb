class Like < ActiveRecord::Base
  validates :liker_id, :post_id, presence: true

  belongs_to(
    :liker,
    :class_name => "User",
    :foreign_key => :liker_id,
    :primary_key => :id
  )

  belongs_to(
    :post,
    :class_name => "Post",
    :foreign_key => :post_id,
    :primary_key => :id
  )
end
