export const fetchProfile = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${user.id}`,
    data: { user }
  });
};

export const updateProfile = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profiles/${user.id}`,
    data: {user}
  });
};
