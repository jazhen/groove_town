class Api::AlbumsController < ApplicationController
  before_action :require_logged_in, only: [:create]

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

  def create
    @album = Album.new(album_params)
    user = User.find_by(id: album_params[:user_id])
    @album.user = user

    if @album.save
      render :show
    else
      render json: @album.errors.messages, status: 409
    end
  end

  private

  def album_params
    params.require(:album).permit(:name, :user_id, :release_date, :art)
  end
end
