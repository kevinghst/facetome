class Api::NewsfeedsController < ApplicationController
  def show
    id = params[:id]
    user = User.find(id)

    user_posts = Post.where("author_id = #{id}")
    to_user_posts = Post.where("target_id = #{id}")

    user_friends_posts = Post.where(:author_id => user.friends.pluck(:id))
    to_user_friends_posts = Post.where(:target_id => user.friends.pluck(:id))

    @posts = user_posts.or(to_user_posts).or(user_friends_posts).or(to_user_friends_posts).order('created_at DESC')
    render :show
  end
end
