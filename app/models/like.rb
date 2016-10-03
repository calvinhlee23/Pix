class Like < ActiveRecord::Base
  validates :author_id, :image_id, presence: true
  validates :author_id, uniqueness: {scope: :image_id}

  belongs_to(
    :author,
    class_name: "User",
    foreign_key: :author_id
  )

  belongs_to(
   :image,
   class_name: "Image",
   foreign_key: :image_id
  )

end
