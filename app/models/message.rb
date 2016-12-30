class Message < ActiveRecord::Base
  validates :sender_id, :sendee_id, :convo_id, :body, presence: true

  belongs_to(
    :convo,
    :class_name => "Convo",
    :foreign_key => :convo_id,
    :primary_key => :id
  )

end
