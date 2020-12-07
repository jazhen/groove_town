class AddDefaultEmptyToLocationForUsers < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :location, from: nil, to: ''
  end
end
