class ChangeNamesToRequests < ActiveRecord::Migration[5.0]
  def change
    rename_column :requests, :requester_user_name, :requester_username
    rename_column :requests, :requestee_user_name, :requestee_username
  end
end
