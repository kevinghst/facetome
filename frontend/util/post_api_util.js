export const createPost = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const updatePost = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/posts/1`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const fetchNewsFeed = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/newsfeeds/${user_id}`,
  });
};

export const fetchWall = (username) => {
  return $.ajax({
    method: 'GET',
    url: `/api/wall/${username}`,
  });
};

export const deletePost = (post_id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/posts/${post_id}`,
  });
};
