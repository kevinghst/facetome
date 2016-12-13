class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.integer :user_id, null: false
      t.integer :friend_id, null: false
      t.string :user_name, null: false
      t.string :friend_name, null: false 
      t.timestamps
    end
  end
end
