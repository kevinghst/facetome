json.array! @users do |user|
  json.partial! "api/friendships/friendship", locals: {friend: user}
end
