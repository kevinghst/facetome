@otherRequests.each do |request|
  json.set! request.id do
    json.extract! request, :requester_user_id, :requester_username
  end
end
