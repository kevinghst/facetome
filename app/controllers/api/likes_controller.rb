class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.save
    render :show
  end

  def index

  end

  def destroy

  end

  def like_params
    params.require(:like).permit(:liker_id, :post_id)
  end
end
