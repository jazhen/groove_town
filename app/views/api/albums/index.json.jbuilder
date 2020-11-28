@albums.includes(:user, art_attachment: :blob).each do |album|
  json.albums do
    json.partial! 'api/albums/album', album: album
  end

  album.tracks.includes(:user, :album, audio_attachment: :blob).each do |track|
    json.tracks do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
