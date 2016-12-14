json.array! @posts do |post|
  json.partial! "api/newsfeeds/newsfeed", locals: {post: post}
end
