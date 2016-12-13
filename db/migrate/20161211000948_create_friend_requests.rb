class CreateFriendRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :requests do |t|
      t.string :requester_username, null: false
      t.string :requestee_username, null: false
      t.integer :requestee_user_id, null: false
      t.integer :requester_user_id, null: false
      t.timestamps
    end
  end
end
