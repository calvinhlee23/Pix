# == Schema Information
#
# Table name: comments
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  image_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_name :string           not null
#

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
