class Api::AlbumsController < ApplicationController
  def index
    # @albums = Album.all.order('RANDOM()')
    # @albums = Album.all.order(release_date: :desc)
    @albums = Album.all
    render :index
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end
end
