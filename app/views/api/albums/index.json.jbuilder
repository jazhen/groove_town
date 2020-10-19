json.array!(@albums.includes(:user)) do |album|
  json.id album.id
  json.name album.name
  json.band album.user.band
  json.user_id album.user_id
end
