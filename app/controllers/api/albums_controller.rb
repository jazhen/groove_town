require 'open-uri'
require 'mp3info'

class Api::AlbumsController < ApplicationController
  before_action :require_logged_in, only: %i[create update destroy]

  def index
    # @albums = Album.all.order('RANDOM()')
    @albums = Album.all.order(release_date: :desc)
    # @albums = Album.all
    render :index
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end

  def create
    tracks_attributes = album_params[:tracks_attributes]
    num_tracks = tracks_attributes.to_h.length

    (0...num_tracks).each do |index|
      track_attributes = tracks_attributes[index.to_s]
      next unless track_attributes[:audio]

      audio = open(track_attributes[:audio])
      track_attributes[:duration] = Mp3Info.open(audio).length
    end

    @album = Album.new(album_params)
    user = User.find_by(id: album_params[:user_id])
    @album.user = user

    if @album.save
      render :show
    else
      render json: @album.errors.messages, status: 409
    end
  end

  def update
    tracks_attributes = album_params[:tracks_attributes]
    num_tracks = tracks_attributes.to_h.length
    @album = Album.find_by(id: album_params[:id])

    (0...num_tracks).each do |index|
      track_attributes = tracks_attributes[index.to_s]
      next unless track_attributes[:audio]

      begin
        audio = open(track_attributes[:audio])
        track_attributes[:duration] = Mp3Info.open(audio).length
      rescue Mp3InfoEOFError
        next
      end
    end

    if @album.update(album_params)
      render :show
    else
      # @album.tracks.each_with_index do |track, index|
      #   next if track.errors.messages.empty?

      #   debugger
      #   @album.errors["tracks[#{index}].audio"] << track.errors.messages[:audio].first
      # end

      render json: @album.errors.messages, status: 409
    end
  end

  def destroy
    @album = Album.find_by(id: params[:id])

    if @album
      @album.destroy
    else
      render json: @album.errors.messages, status: 404
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
      tracks_attributes: %i[id name ord user_id album_id duration audio _destroy]
    )
  end
end
