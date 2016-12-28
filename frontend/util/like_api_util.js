export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  });
};

export const deleteLike = (like_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/${like_id}`,
  });
};
