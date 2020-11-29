class AddReleaseDateToAlbum < ActiveRecord::Migration[5.2]
  def change
    add_column(:albums, :release_date, :datetime, null: false)
    add_index :albums, :release_date
  end
end
