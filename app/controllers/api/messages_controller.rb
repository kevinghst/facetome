class Api::MessagesController < ApplicationController
  def create
    body = params[:message][:body]
    sendee_id = params[:message][:sendee_id]
    sender_id = params[:message][:sender_id]

    sendee_username = User.find(sendee_id).username
    sender_username = User.find(sender_id).username

    combined_array = [sendee_username, sender_username].sort
    combined_names = combined_array[0] + "AND" + combined_array[1]

    convo = Convo.find_by_names(combined_names)
    convo_id = convo.id

    @message = Message.new(body: body, sendee_id: sendee_id, sender_id: sender_id, convo_id: convo_id)
    @message.save

    Pusher.trigger('chat_' + convo.names,  'message_sent', {})

    render :show
  end
end
