json.set! user.id do
  json.extract! user, :id, :username, :email, :band, :location
  json.albumIds user.albums.order(:release_date).reverse_order.pluck(:id)
  json.avatarUrl url_for(user.avatar) if user.avatar.attached?
end
