class Post < ActiveRecord::Base
  validates :body, :author_id, :target_id, presence: true

  belongs_to(
    :author,
    :class_name => "User",
    :foreign_key => :author_id,
    :primary_key => :id
  )

  belongs_to(
    :target,
    :class_name => "User",
    :foreign_key => :target_id,
    :primary_key => :id
  )

end
