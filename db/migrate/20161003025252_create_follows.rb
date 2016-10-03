class CreateFollows < ActiveRecord::Migration
  def change
    create_table :follows do |t|
      t.integer :user_id, null: false
      t.integer :following, null: false, foreign_key: true
      t.timestamps null: false
    end
    add_index :follows, [:user_id, :following], unique: true

  end
end
