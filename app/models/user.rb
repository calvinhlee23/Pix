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

  def is_public?
    self.public
  end

  def is_friends_with?(user)
    self.followers.include?(user)
  end

  def followers
    follows = Follow.where(following_user_id: self.id)
    followers = follows.map{|f| f.user}
  end

  def following_users_images
    following_users = self.following_users
    following_users_images = []

    following_users.each do |fo|
      following_users_images.push(fo.images)
    end

    following_users_images.flatten!
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
