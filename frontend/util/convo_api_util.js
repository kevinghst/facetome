export const createConvo = (convo) => {
  return $.ajax({
    method: 'POST',
    url: `/api/convos`,
    data: { convo }
  });
};

export const fetchConvos = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/convos/${user_id}`,
  });
}

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: `/api/messages`,
    data: { message }
  });
};
