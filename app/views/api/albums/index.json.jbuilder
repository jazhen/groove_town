json.array!(@albums.includes(:user)) do |album|
  json.partial! 'api/albums/album', album: album
end
