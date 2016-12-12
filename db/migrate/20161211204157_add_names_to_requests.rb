class AddNamesToRequests < ActiveRecord::Migration[5.0]
  def change
    add_column :requests, :requester_user_name, :string, null: false
    add_column :requests, :requestee_user_name, :string, null: false
    add_column(:requests, :created_at, :datetime)
    add_column(:requests, :updated_at, :datetime)
  end
end
