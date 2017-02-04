
export const getFriendsNames = ({friends}) => {
  return Object.keys(friends).map( id => friends[id].username)
};

export const getOtherRequestsNames = ({otherRequests}) => {
  return Object.keys(otherRequests).map( id => otherRequests[id].requester_user_id )
};

export const getUsersFullNames = (users) => {
  return users.map(user => (user.firstname + " " + user.lastname).toLowerCase())
};

export const getSelectedFriends = ({userFriends}) => {
  let selectedFriendKeys = Object.keys(userFriends);
  if(selectedFriendKeys.length > 9){
    selectedFriendKeys = selectedFriendKeys.slice(0, 9);
  }
  return selectedFriendKeys;
};
