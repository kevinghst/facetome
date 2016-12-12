class Api::ProfilesController < ApplicationController


  def show
    @user = User.find_by({ username: params[:username] })
    render :show
  end

  def update
    @user = User.find_by_username(params[:user][:username])
    if @user.update(user_params)
      render :show
    else
      render json: ["Cannot update information"], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:gender, :birthday, :hometown, :occupation, :photo, :background)
  end
end
