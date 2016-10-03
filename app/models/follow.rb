class Follow < ActiveRecord::Base
  validates :user_id, :following, presence: true
  validates :user_id, uniqueness: {scope: :following}

end
