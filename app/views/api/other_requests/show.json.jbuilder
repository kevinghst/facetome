@otherRequests.each do |request|
  json.set! request.id do
    json.partial! "api/other_requests/other_request", locals: {request: request}
  end
end
