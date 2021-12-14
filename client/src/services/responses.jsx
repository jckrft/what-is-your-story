import api from './apiConfig';

export const getAllResponses = async () => {
  const resp = await api.get('/responses');
  return resp.data;
};

export const getOneResponse = async (id) => {
  const resp = await api.get(`/responses/${id}`);
  return resp.data;
};

export const postResponse = async (id, responseData) => {
  const resp = await api.post(`/topics/${id}/responses`, { response: responseData });
  return resp.data;
};

export const putResponse = async (id, responseData) => {
  const resp = await api.put(`/topics/${id}/responses${id}`, { response: responseData });
  return resp.data;
};

export const deleteResponse = async (id) => {
  await api.delete(`/topics/${id}/responses/${id}`);
};