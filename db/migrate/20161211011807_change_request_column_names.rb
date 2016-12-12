class ChangeRequestColumnNames < ActiveRecord::Migration[5.0]
  def change
    rename_column :friendships, :this_user, :user_id
    rename_column :friendships, :friend, :friend_id

  end
end
