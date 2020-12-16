json.set! album.id do
  json.extract! album, :id, :name
  json.releaseDate album.release_date
  json.userId album.user_id
  json.band album.user.band
  json.trackIds album.tracks.order(ord: :asc).pluck(:id)
  json.artUrl url_for(album.art) if album.art.attached?
  json.thumbnail200Url url_for(album.thumbnail_200) if album.thumbnail_200.attached?
  json.thumbnail1000Url url_for(album.thumbnail_1000) if album.thumbnail_1000.attached?
end
