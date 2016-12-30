class CreateConvos < ActiveRecord::Migration[5.0]
  def change
    create_table :convos do |t|
      t.string :names, null: false
      t.timestamps
    end
    add_index(:convos, :names, unique: true)
  end
end
