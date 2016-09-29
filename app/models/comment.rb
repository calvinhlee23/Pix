class Comment < ActiveRecord::Base
  validates :author_id, :image_id, :body, presence: true

  belongs_to(
    :image,
    class_name: "Image",
    foreign_key: :image_id
  )

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )
end
