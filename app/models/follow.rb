# == Schema Information
#
# Table name: follows
#
#  id                :integer          not null, primary key
#  user_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  following_user_id :integer          not null
#

class Follow < ActiveRecord::Base
  validates :user_id, :following_user_id, presence: true
  validates :user_id, uniqueness: {scope: :following_user_id}


  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id
  )

  has_one(
   :following,
   class_name: "User",
   foreign_key: :id,
   primary_key: :following_user_id
  )

  def self.delete(owner_id, target_id)
    target_follow = Follow.where(user_id: owner_id).where(following_user_id: target_id)
    if target_follow
      target_follow.first.destroy
    else
      raise "target follow cannot be found - Follow.rb"
    end
  end
end
