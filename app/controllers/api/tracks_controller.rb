class Api::TracksController < ApplicationController
  def show
    @track = Track.find_by(id: params[:id])
    render :show
  end
end
