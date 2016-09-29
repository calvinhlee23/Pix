class CreateLikes < ActiveRecord::Migration
  def change
    create_table :likes do |t|
      t.integer :author_id, null: false, foreign_key: true
      t.integer :image_id, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
