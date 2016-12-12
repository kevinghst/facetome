class Api::OwnRequestsController < ApplicationController

    def show
      user = User.find(params[:id]);
      @ownRequests = user.ownrequests;
      render :show
    end

end
