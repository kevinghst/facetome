export const acceptFriend = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: { friendship }
  });
};

// {friend_id: 10, user_id: 14}

export const fetchFriends = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/friendships/${user_id}`
  });
}; 

export const deleteFriend = (user_id, friend_id) => {
  let code = `${user_id}` + "," + `${friend_id}`
  return $.ajax({
    method: 'DELETE',
    url: `/api/friendships/${code}`,
  });
};
