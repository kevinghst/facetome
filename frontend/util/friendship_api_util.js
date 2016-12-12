export const friendAccept = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: `/api/friendships`,
    data: { friendship }
  });
};

// {friend_id: 10, user_id: 14}
