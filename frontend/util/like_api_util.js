export const createLike = (like) => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: { like }
  });
};
