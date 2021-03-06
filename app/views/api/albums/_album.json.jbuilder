json.set! album.id do
  json.extract! album, :id, :name
  json.releaseDate album.release_date
  json.userId album.user_id
  json.band album.user.band
  json.trackIds album.tracks.order(ord: :asc).pluck(:id)
  json.thumbnail1000Url url_for(album.thumbnail_1000) if album.thumbnail_1000.attached?
end
