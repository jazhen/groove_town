class Api::SessionsController < ApplicationController
  def create
    username_or_email = params[:user][:username_or_email]
    password = params[:user][:password]
    @user = User.find_by_credentials(username_or_email, password)

    if @user
      login!(@user)
      render 'api/users/show'
    else
      session_errors = Hash.new { |h, k| h[k] = [] }

      if username_or_email.blank?
        session_errors[:username] << 'Please enter your username.'
      elsif !User.find_by_username_or_email(username_or_email)
        session_errors[:username] << 'We didn’t recognize that username.'
      end

      if password.blank?
        session_errors[:password] << 'Please enter your password.'
      elsif password.length < 3
        session_errors[:password] << 'Your password is at least 3 characters.'
      else
        session_errors[:password] << 'Incorrect password. Please try again.'
      end

      render json: session_errors, status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render 'api/users/show'
    else
      render json: ['Invalid request, not logged in.'], status: 401
    end
  end
end
