json.extract! user, :id, :username, :email, :band
json.albumIds user.albums.order(:release_date).reverse_order.pluck(:id)
