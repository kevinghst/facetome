class Api::RequestsController < ApplicationController


  def create
    requester_id = params[:request][:requester_user_id]
    requestee_id = params[:request][:requestee_user_id]
    requester = User.find(requester_id)
    requestee = User.find(requestee_id)

    @request = Request.new(
      requester_user_id: requester.id,
      requestee_user_id: requestee.id,
      requester_username: requester.username,
      requestee_username: requestee.username
    )

    if @request.save
      render :show
    else
      render json: @request.errors.full_messages, status: 422
    end
  end


  def destroy
    user_array = params[:id].split(",")
    requester = user_array[0].to_i
    requestee = user_array[1].to_i
    @request = Request.find_by_requester_user_id_and_requestee_user_id(requester, requestee)
    if @request
      @request.destroy
      render :show
    end
    reverse_request = Request.find_by_requester_user_id_and_requestee_user_id(requestee, requester)
    if reverse_request
      reverse_request.destroy
    end
  end

  def request_params
    params.require(:request).permit(:requester_user_id, :requestee_user_id)
  end
end
