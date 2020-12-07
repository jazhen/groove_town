class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    avatar_url = open('https://groove-town-seeds.s3-us-west-1.amazonaws.com/avatars/default-profile-pic.jpg')
    @user.avatar.attach(io: avatar_url, filename: 'default-profile-pic')

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 409
    end
  end

  def show
    @user = User.find_by(id: params[:id])

    if @user
      render :show
    else
      render json: @user.errors, status: 404
    end
  end

  def update
    @user = User.find_by(id: params[:id])

    if @user.update(user_params)
      render :show
    else
      render json: @user.errors, status: 409
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :band,
      :location,
      :avatar
    )
  end
end
