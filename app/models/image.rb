class Image < ActiveRecord::Base
  validates :user_id, :cloud_url, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :id
  )

  has_many(
    :likes,
    class_name: "Like",
    foreign_key: :image_id
  )

  has_many(
    :comments,
    class_name: "Comment",
    foreign_key: :image_id
  )
  
end
