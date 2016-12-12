class CreateFriendRequests < ActiveRecord::Migration[5.0]
  def change
    create_table :friend_requests do |t|
      t.string :requester_username, null: false
      t.string :requestee_username, null: false
    end
  end
end
