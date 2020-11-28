class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name, null: false
      t.integer :ord, null: false
      t.references :user, foreign_key: true
      t.references :album, foreign_key: true

      t.timestamps
    end
    add_index :tracks, :name
    add_index :tracks, :ord, unique: true
  end
end
