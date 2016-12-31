json.id convo.id
json.names convo.names

json.messages do
  json.array! convo.messages, partial: 'api/messages/message', as: :message
end
