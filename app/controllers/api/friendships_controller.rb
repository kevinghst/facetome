class Api::FriendshipsController < ApplicationController

  def create
    user_id = params[:friendship][:user_id]
    friend_id = params[:friendship][:friend_id]
    @user = User.find(user_id)
    @friend = User.find(friend_id)

    friendship = Friendship.new(
      user_id: @user.id,
      friend_id: @friend.id
    )

    reverse_friendship = Friendship.new(
      user_id: @friend.id,
      friend_id: @user.id
    )

    if friendship.save
      reverse_friendship.save
      render :show
    end
  end

  def show
    user = User.find(params[:id])
    @friends = user.friends
    render :index
  end


  def destroy
    user_array = params[:id].split(",")
    user_id = user_array[0].to_i
    friend_id = user_array[1].to_i
    @friend = User.find(friend_id)
    friendship = Friendship.find_by_user_id_and_friend_id(user_id, friend_id)
    if friendship
      friendship.destroy
      reverse_friendship = Friendship.find_by_user_id_and_friend_id(friend_id, user_id)
      reverse_friendship.destroy
      render :show
    end
  end

  def friendship_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
