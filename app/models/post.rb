class Post < ActiveRecord::Base
  validates :body, :author_id, :target_id, presence: true

  has_attached_file :image, default_url: "monolith.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

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

  has_many(
    :comments,
    :class_name => "Comment",
    :foreign_key => :post_id,
    :primary_key => :id
  )

  has_many(
    :likes,
    :class_name => "Like",
    :foreign_key => :post_id,
    :primary_key => :id
  )

  def date
    date = self.created_at.strftime("%d %b. %Y")
    day = date[0..1]
    month = date[3..5]
    return "#{month} #{day}"
  end

  def time
    status = "am"
    time = self.created_at.strftime("%H:%M")
    minutes = time[3..4]
    hours = time[0..1]
    if hours.to_i > 12
      hours = (hours.to_i - 12).to_s
      status = "pm"
    end
    return "#{hours}:#{minutes}#{status}"
  end

end
