class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      # user info
      t.string :email, null: false, unique: true
      t.string :user_name, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :public, null: false, default: true

      # we may have to add follow_index, like_index later.
      t.timestamps null: false
    end
  end
end
