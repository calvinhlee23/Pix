class DropFollowingFromFollowAddFollowingUserId < ActiveRecord::Migration
  def change
    remove_column :follows, :following
    add_column :follows, :following_user_id, :integer, null: false
  end
end
