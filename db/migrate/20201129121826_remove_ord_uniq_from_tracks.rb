class RemoveOrdUniqFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_index :tracks, :ord
    add_index :tracks, %i[ord album_id], unique: true
  end
end
