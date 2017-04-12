# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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
