@friends.each do |friend|
  json.set! friend.id do
    json.partial! "api/friendships/friendship", locals: {friend: friend}
  end
end
