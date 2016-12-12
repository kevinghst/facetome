class Request < ActiveRecord::Base
  validates :requester_user_id, :requestee_user_id, presence: true

  belongs_to(
    :requester,
    :class_name => "User",
    :foreign_key => :requester_user_id,
    :primary_key => :id
  )

  belongs_to(
    :requestee,
    :class_name => "User",
    :foreign_key => :requestee_user_id,
    :primary_key => :id
  )

end
