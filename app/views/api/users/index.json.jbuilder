@users.each do |user|
  json.users do
    json.partial! 'api/users/user', user: user
  end

  user.albums.each do |album|
    json.albums do
      json.partial! 'api/albums/album_with_thumbnail', album: album
    end
  end

  user.tracks.each do |track|
    json.tracks do
      json.partial! 'api/tracks/track', track: track
    end
  end
end
