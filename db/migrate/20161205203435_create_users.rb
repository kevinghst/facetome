class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.string :username, null: false
      t.string :gender, null: false
      t.string :birthday, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
    end
    add_index(:users, :username, unique: true)
    add_index(:users, :session_token, unique: true)
  end
end
