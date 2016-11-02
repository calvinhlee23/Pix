class Image < ActiveRecord::Base
  validates :user_id, :cloud_url, presence: true

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

  def self.publicImages(limit)
    Image.find_by_sql("
          SELECT DISTINCT images.*
          FROM images INNER JOIN users
          ON images.user_id = users.id
          WHERE users.public = true
          ORDER BY images.created_at DESC
          LIMIT #{limit}
        ")
  end

end
