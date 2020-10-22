json.id album.id
json.name album.name
json.band album.user.band
json.user_id album.user_id
json.photoUrl url_for(album.art) if album.art.attached?
