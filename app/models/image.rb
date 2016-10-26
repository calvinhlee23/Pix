class Image < ActiveRecord::Base
  validates :user_id, :cloud_url, presence: true
  validates :cloud_url, uniqueness: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :likes, dependent: :destroy,
    class_name: "Like",
    foreign_key: :image_id
  )

  has_many(
    :comments,-> {order "created_at DESC"},
    dependent: :destroy,
    class_name: "Comment",
    foreign_key: :image_id,
  )



end
