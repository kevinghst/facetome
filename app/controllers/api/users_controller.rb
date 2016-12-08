class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find_by_email(params[:user][:email])
    @user.destroy
  end

  def user_params
    params.require(:user).permit(:firstname, :lastname, :gender, :birthday, :email, :password)
  end
end
