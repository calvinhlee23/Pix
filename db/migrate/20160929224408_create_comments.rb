class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.integer :author_id, null: false, foreign_key: true
      t.integer :image_id, null: false, foreign_key: true

      t.timestamps null: false
    end
  end
end
