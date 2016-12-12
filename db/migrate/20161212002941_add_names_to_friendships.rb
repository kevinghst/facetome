class AddNamesToFriendships < ActiveRecord::Migration[5.0]
  def change
    add_column :friendships, :user_name, :string, null: false
    add_column :friendships, :friend_name, :string, null: false
    add_column(:friendships, :created_at, :datetime)
    add_column(:friendships, :updated_at, :datetime)
  end
end
