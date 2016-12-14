class Api::NewsfeedsController < ApplicationController
  def show
    id = params[:id]
    user = User.find(id)

    user_posts = Post.where("author_id = #{id}")
    to_user_posts = Post.where("target_id = #{id}")

    user_friends_posts = Post.where(:author_id => user.friends.pluck(:id))
    to_user_friends_posts = Post.where(:target_id => user.friends.pluck(:id))

    @posts = user_posts.or(to_user_posts).or(user_friends_posts).or(to_user_friends_posts).order('updated_at DESC')
    render :show
  end
end

=begin
get all posts where author.id === params[:id]
get all posts where target.id === params[:id]

get all posts where author.id IN (user's friends IDs)
get all posts where target.id IN (user's friends IDs)


name_relation = first_name_relation.or(last_name_relation)

Client.where(:orders_count => [1,3,5])



=end
