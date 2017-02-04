class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    @like.save
    render :show
  end

  def destroy
    @like = Like.find(params[:id])
    @like.destroy
    render :show
  end

  def like_params
    params.require(:like).permit(:liker_id, :post_id)
  end
end
