class User < ActiveRecord::Base
  attr_reader :password

  validates :firstname, :lastname, :password_digest, :gender, :birthday, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates(
    :password,
    length: { minimum: 6, allow_nil: true }
  )
  before_validation :ensure_session_token


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)

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
