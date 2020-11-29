json.set! track.id do
  json.extract! track, :id, :name, :ord, :duration
  json.userId track.user_id
  json.albumId track.album_id
  json.album track.album.name
  json.band track.user.band
  json.audioUrl url_for(track.audio) if track.audio.attached?
end
