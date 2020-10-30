@albums.includes(:user, art_attachment: :blob).each do |album|
  json.set! album.id do
    json.partial! 'api/albums/album', album: album
  end
end
