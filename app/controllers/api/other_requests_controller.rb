class Api::OtherRequestsController < ApplicationController

    def show
      user = User.find(params[:id]);
      @otherRequests = user.otherrequests;
      render :show
    end

end
