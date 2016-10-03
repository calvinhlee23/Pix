class Image < ActiveRecord::Base
  validates :user_id, :cloud_url, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id
  )

  has_many(
    :likes, dependent: :destory
    class_name: "Like",
    foreign_key: :image_id
  )

  has_many(
    :comments, dependent: :destory
    class_name: "Comment",
    foreign_key: :image_id
  )

end
