require 'open-uri'
require 'mp3info'

class Api::AlbumsController < ApplicationController
  before_action :require_logged_in, only: %i[create update destroy]

  def index
    @albums = Album.all.order(release_date: :desc)
    render :index
  end

  def show
    @album = Album.find_by(id: params[:id])
    render :show
  end

  def create
    num_tracks = album_params[:tracks_attributes].to_h.length

    (0...num_tracks).each do |index|
      next unless params[:album][:tracks_attributes][index.to_s][:audio]

      begin
        audio = open(params[:album][:tracks_attributes][index.to_s][:audio])
        params[:album][:tracks_attributes][index.to_s][:duration] = Mp3Info.open(audio).length
      rescue Mp3InfoEOFError
        next
      end
    end

    @album = Album.new(album_params)
    @album.user = User.find_by(id: album_params[:user_id])

    if @album.save
      render :show
    else
      @album.tracks.each_with_index do |track, index|
        next if track.errors.messages.empty?

        @album.errors["tracks[#{index}].name"] << track.errors.messages[:name].first
        @album.errors["tracks[#{index}].audio"] << track.errors.messages[:audio].first
      end

      render json: @album.errors.messages, status: 409
    end
  end

  def update
    num_tracks = album_params[:tracks_attributes].to_h.length
    @album = Album.find_by(id: album_params[:id])

    (0...num_tracks).each do |index|
      next unless params[:album][:tracks_attributes][index.to_s][:audio]

      begin
        audio = open(params[:album][:tracks_attributes][index.to_s][:audio])
        params[:album][:tracks_attributes][index.to_s][:duration] = Mp3Info.open(audio).length
      rescue Mp3InfoEOFError
        next
    end
    end

    if @album.update(album_params)
      render :show
    else
      @album.tracks.each_with_index do |track, index|
        next if track.errors.messages.empty?

        @album.errors["tracks[#{index}].name"] << track.errors.messages[:name].first
        @album.errors["tracks[#{index}].audio"] << track.errors.messages[:audio].first
      end

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
