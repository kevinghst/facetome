class RenameusernameTousername < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :username, :username
  end
end
