json.id request.id
json.requester_user_id request.requester_user_id
json.requester_username request.requester_username
json.requester do
  json.photo_url asset_path(request.requester.photo.url)
end
