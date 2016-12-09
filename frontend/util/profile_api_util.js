export const fetchProfile = (email) => {
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${email}`,
  });
};

export const updateProfile = (user) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profiles/${user.id}`,
    data: {user}
  });
};
