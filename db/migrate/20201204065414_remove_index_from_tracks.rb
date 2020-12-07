class RemoveIndexFromTracks < ActiveRecord::Migration[5.2]
  def change
    remove_index(:tracks, %w[ord album_id])
  end
end
