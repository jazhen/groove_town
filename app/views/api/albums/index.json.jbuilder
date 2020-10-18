@albums.includes(:user).each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album: album
    json.band album.user.band
  end
end
