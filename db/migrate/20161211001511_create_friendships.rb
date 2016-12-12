class CreateFriendships < ActiveRecord::Migration[5.0]
  def change
    create_table :friendships do |t|
      t.string :user, null: false
      t.string :friend, null: false
    end
  end
end
