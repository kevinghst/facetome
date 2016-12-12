export const friendRequest = (request) => {
  return $.ajax({
    method: 'POST',
    url: '/api/requests',
    data: { request }
  });
};

// {requester_user_id: 10, requestee_user_id: 14}
 

export const fetchOwnRequests = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/own_requests/${user_id}`,
  });
};

export const fetchOtherRequests = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/other_requests/${user_id}`,
  });
};

export const deleteRequest = (requester_id, requestee_id) => {
  let code = `${requester_id}` + "," + `${requestee_id}`
  return $.ajax({
    method: 'DELETE',
    url: `/api/requests/${code}`,
  });
};




// {requester_user_id: 3, requestee_user_id: 5}
