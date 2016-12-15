json.id comment.id
json.body comment.body
json.author_id comment.author_id
json.post_id comment.post_id
json.date comment.date
json.time comment.time

json.author do
  json.photo_url asset_path(comment.author.photo.url)
  json.firstname comment.author.firstname
  json.lastname comment.author.lastname
  json.username comment.author.username
end
