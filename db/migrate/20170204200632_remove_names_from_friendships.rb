class RemoveNamesFromFriendships < ActiveRecord::Migration[5.0]
  def change
    remove_column :friendships, :user_name, :string
    remove_column :friendships, :friend_name, :string
  end
end
