class AddBandToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :band, :string
    add_index :users, :band
  end
end
