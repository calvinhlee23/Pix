class Image < ActiveRecord::Base
  validates :user_id, :cloud_link, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :id
  )
end