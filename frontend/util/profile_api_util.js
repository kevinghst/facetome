export const fetchProfile = (username) => {
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${username}`,
  });
};

export const updateProfile = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/profiles/1`,
    data: formData,
    contentType: false,
    processData: false
  });
};

export const fetchAllUsers = () => {
  return $.ajax({
    method: "GET",
    url: `/api/profiles`,
  });
}
