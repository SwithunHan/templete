export const getData = (req) => {
  req = JSON.parse(req.body);
  return {status: 200, data: 'success'};
};
