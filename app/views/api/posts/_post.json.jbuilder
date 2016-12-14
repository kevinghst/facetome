json.id post.id
json.body post.body
json.author_id post.author_id
json.target_id post.target_id
json.created_at post.created_at
json.image_url asset_path(post.image.url)
json.author do
  json.photo_url asset_path(post.author.photo.url)
  json.firstname post.author.firstname
  json.lastname post.author.lastname
  json.username post.author.username
end
