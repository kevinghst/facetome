class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :sendee_id, null: false
      t.integer :convo_id, null: false
      t.string :body, null: false
      t.timestamps
    end
    add_index(:messages, :sender_id)
    add_index(:messages, :sendee_id)
    add_index(:messages, :convo_id)
  end
end
