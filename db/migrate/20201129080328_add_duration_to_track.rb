class AddDurationToTrack < ActiveRecord::Migration[5.2]
  def change
    add_column :tracks, :duration, :string
    change_column_null(:tracks, :duration, false)
  end
end
