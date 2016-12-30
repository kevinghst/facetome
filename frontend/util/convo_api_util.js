export const createConvo = (convo) => {
  return $.ajax({
    method: 'POST',
    url: `/api/convos`,
    data: { convo }
  });
};
