class Api::FriendshipsController < ApplicationController

  def create
    user_id = params[:friendship][:user_id]
    friend_id = params[:friendship][:friend_id]
    user = User.find(user_id)
    friend = User.find(friend_id)

    @friendship = Friendship.new(
      user_id: user.id,
      friend_id: friend.id,
      user_name: user.username,
      friend_name: friend.username
    )

    @reverse_friendship = Friendship.new(
      user_id: friend.id,
      friend_id: user.id,
      user_name: friend.username,
      friend_name: user.username
    )

    if @friendship.save
      @reverse_friendship.save
      render :show
    end

  end


  def destroy

  end

  def friendship_params;
    params.require(:friendship).permit(:user_id, :friend_id)
  end

end
