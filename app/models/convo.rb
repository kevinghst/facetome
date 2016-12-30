class Convo < ActiveRecord::Base
  validates :names, presence: true

  serialize: names,Array

  has_many(
    :messages,
    :class_name => "Message",
    :foreign_key => :convo_id,
    :primary_key => :id
  )

end
