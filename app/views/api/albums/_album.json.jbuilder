json.set! album.id do
  json.extract! album, :id, :name
  json.releaseDate album.release_date
  json.userId album.user_id
  json.band album.user.band
  json.trackIds album.tracks.pluck(:id)
  json.artUrl url_for(album.art) if album.art.attached?
end
