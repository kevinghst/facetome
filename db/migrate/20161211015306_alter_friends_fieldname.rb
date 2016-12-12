class AlterFriendsFieldname < ActiveRecord::Migration[5.0]
  def up
    change_column :friendships, :user_id, 'integer USING CAST(user_id AS integer)'
    change_column :friendships, :friend_id, 'integer USING CAST(friend_id AS integer)'

    change_column :requests, :requester_user_id, 'integer USING CAST(requester_user_id AS integer)'
    change_column :requests, :requestee_user_id, 'integer USING CAST(requestee_user_id AS integer)'


  end
end
