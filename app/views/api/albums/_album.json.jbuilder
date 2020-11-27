json.extract! album, :id, :name, :user_id
json.band album.user.band
json.artUrl url_for(album.art) if album.art.attached?
