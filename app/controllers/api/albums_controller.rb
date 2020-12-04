require 'open-uri'
require 'mp3info'

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
    num_tracks = album_params[:tracks_attributes].to_h.length

    # debugger
    (0...num_tracks).each do |index|
      next unless params[:album][:tracks_attributes][index.to_s][:audio]

      # debugger
      audio = open(params[:album][:tracks_attributes][index.to_s][:audio])
      params[:album][:tracks_attributes][index.to_s][:duration] =
        Mp3Info.open(audio).length
    end

    # debugger
    @album = Album.find_by(id: params[:album][:id])
    # @album = Album.new(album_params)
    user = User.find_by(id: album_params[:user_id])
    @album.user = user

    if @album.update(album_params)
      # debugger
      render :show
    else
      # debugger
      puts @album.errors.messages
      puts @album.errors.full_messages
      render json: @album.errors.messages, status: 409
    end
  end

  private

  def album_params
    params.require(:album).permit(
      :id,
      :name,
      :user_id,
      :release_date,
      :art,
      tracks_attributes: %i[id name ord user_id album_id duration audio]
    )
  end
end
