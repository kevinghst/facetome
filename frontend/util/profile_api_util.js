export const fetchProfile = (email) => {
  return $.ajax({
    method: 'GET',
    url: `/api/profiles/${email}`,
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
