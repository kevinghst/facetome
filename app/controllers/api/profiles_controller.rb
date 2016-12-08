class Api::ProfilesController < ApplicationController

  def show
    @user = User.find_by_email(params[:user][:email])
    render :show
  end

  def update
    @user = User.find_by_email(params[:user][:email])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: ["Cannot update information"], status: 422
    end
  end

  def user_params
    params.require(:user).permit(:gender, :birthday, :hometown, :occupation)
  end
end
