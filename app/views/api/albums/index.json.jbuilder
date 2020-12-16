@albums.includes(:user, art_attachment: :blob).each do |album|
  json.albums do
    json.partial! 'api/albums/album', album: album
  end
end

json.albumIds @albums.pluck(:id)
