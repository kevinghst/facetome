class Api::MessagesController < ApplicationController
  def create
    body = params[:message][:body]
    sendee_id = params[:message][:sendee_id]
    sender_id = params[:message][:sender_id]

    sendee_username = User.find(sendee_id).username
    sender_username = User.find(sender_id).username

    combined_array = [sendee_username, sender_username].sort
    combined_names = combined_array[0] + "AND" + combined_array[1]

    convo_id = Convo.find_by_names(combined_names).id

    @message = Message.new(body: body, sendee_id: sendee_id, sender_id: sender_id, convo_id: convo_id)
    @message.save
    render :show
  end
end
