json.extract! track, :id, :name, :ord, :user_id, :album_id
json.album track.album.name
json.band track.user.band
json.audio_url url_for(track.audio) if track.audio.attached?
