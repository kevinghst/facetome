export const createPost = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: formData,
    contentType: false,
    processData: false
  });
};

export const createPostTest = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: {post}
  });
};

export const fetchNewsFeed = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/newsfeeds/${user_id}`,
  });
}

export const fetchWall = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/wall/${user_id}`,
  });
}
