class User < ActiveRecord::Base
  validates :email, :user_name, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  after_initialize :ensure_session_token

  has_many(
    :images, dependent: :destroy,
    class_name: "Image",
    foreign_key: :user_id
  )

  has_many(
    :follows, dependent: :destroy,
    class_name: "Follow",
    foreign_key: :user_id
  )

  has_many(
    :following_users,
    through: :follows,
    source: :following
  )


  def followers
    User.find_by_sql("
     SELECT *
     FROM users INNER JOIN follows
     ON users.id = follows.following
     WHERE users.id = #{self.id}
    ")
  end

  def followers_images
    followers = self.followers
    followers_images = []

    followers.each do |follower|
      followers_images.push(follower.images)
    end

    followers_images.flatten!
  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
  end

  def is_password?(pw)
    confirm = BCrypt::Password.new(self.password_digest)
    confirm.is_password?(pw)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def reset_session_token
    self.session_token = User.generate_session_token
    self.save
  end

  def self.find_by_credential(email,pw)
    user = User.find_by_email(email)
    if user
      return user if user.is_password?(pw)
    end
    raise "email/pw combination not found"
  end

end
