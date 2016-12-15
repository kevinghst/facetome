class Api::WallController < ApplicationController
  def show
    user = User.find_by_username(params[:id])
    id = user.id

    user_posts = Post.where("author_id = #{id}")
    to_user_posts = Post.where("target_id = #{id}")

    @posts = user_posts.or(to_user_posts).order('updated_at DESC')
    render :show
  end
end
