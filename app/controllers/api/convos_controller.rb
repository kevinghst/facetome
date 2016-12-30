class Api::ConvosController < ApplicationController
  def create
    firstUserId = params[:convo][:user_id].to_i
    secondUserId = params[:convo][:friend_id].to_i

    firstUserName = User.find(firstUserId).username
    secondUserName = User.find(secondUserId).username

    combined_array = [firstUserName, secondUserName].sort
    combined_names = combined_array[0] + "AND" + combined_array[1]

    convo = Convo.new(names: combined_names)
    convo.save
  end
end
