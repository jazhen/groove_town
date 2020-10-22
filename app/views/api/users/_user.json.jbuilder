json.extract! user, :id, :username, :email, :band
json.albumIds user.albums.pluck(:id)
