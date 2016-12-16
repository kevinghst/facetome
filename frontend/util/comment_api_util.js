export const createComment = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const deleteComment = (comment_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment_id}`,
  });
}
