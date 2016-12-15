export const createComment = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: formData,
    contentType: false,
    processData: false
  });
};
