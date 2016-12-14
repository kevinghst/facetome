class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials( params[:user][:username], params[:user][:password] )
    if @user
      login(@user)
      render :show
    else
      unless params[:user][:username]==="" && params[:user][:password]===""
        render json: ["invalid login information"], status: 404
      end
    end
  end

  def destroy
    if current_user
      @user = current_user
      logout(@user)
      render json: {}
    else
      render json: ["no user to log out"], status: 404
    end
  end
end
