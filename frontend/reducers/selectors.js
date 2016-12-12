
export const getFriendsNames = ({friends}) => {
  return Object.keys(friends).map( id => friends[id].username)
};

export const getOtherRequestsNames = ({otherRequests}) => {
  return Object.keys(otherRequests).map( id => otherRequests[id].requester_user_id )
};
