class User < ActiveRecord::Base
  attr_reader :password

  validates :firstname, :lastname, :password_digest, :gender, :birthday, presence: true
  validates :username, :session_token, presence: true, uniqueness: true
  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )
  before_validation :ensure_session_token

  has_attached_file :photo, default_url: "missing.jpg"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/

  has_attached_file :background, default_url: "red_cover.jpg"
  validates_attachment_content_type :background, content_type: /\Aimage\/.*\Z/

  has_many(
    :friendships,
    :class_name => "Friendship",
    :foreign_key => :user_id,
    :primary_key => :id
  )

  has_many :friends, :through => :friendships, :source => :friend

  has_many(
    :ownrequests,
    :class_name => "Request",
    :foreign_key => :requester_user_id,
    :primary_key => :id
  )

  has_many(
    :otherrequests,
    :class_name => "Request",
    :foreign_key => :requestee_user_id,
    :primary_key => :id
  )

  has_many(
    :ownposts,
    :class_name => "Post",
    :foreign_key => :author_id,
    :primary_key => :id
  )

  has_many(
    :otherposts,
    :class_name => "Post",
    :foreign_key => :target_id,
    :primary_key => :id
  )

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
