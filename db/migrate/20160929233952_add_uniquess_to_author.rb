class AddUniquessToAuthor < ActiveRecord::Migration
  def change
    add_index :likes, [:author_id, :image_id], unique: true
  end
end
