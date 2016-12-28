json.id like.id
json.post_id like.post_id
json.liker_id like.liker_id

json.liker do
  json.firstname like.liker.firstname
  json.lastname like.liker.lastname
  json.username like.liker.username
end
