json.user do
  json.partial! 'api/users/user', user: @user
end

@user.albums.each do |album|
  json.albums do
    json.set! album.id do
      json.partial! 'api/albums/album', album: album
    end
  end
end
