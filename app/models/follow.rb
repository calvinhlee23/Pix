class Follow < ActiveRecord::Base
  validates :user_id, :following, presence: true
  validates :user_id, uniqueness: {scope: :following}


  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id
  )

  has_one(
   :following,
   class_name: "User",
   foreign_key: :id,
   primary_key: :following
  )
end
