class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :user_id, foreign_key: true, null: false
      t.string :cloud_url, null: false
      t.timestamps null: false
    end
  end
end
