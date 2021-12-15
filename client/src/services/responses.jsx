import api from './apiConfig';

export const getUserResponses = async () => {
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
  const resp = await api.put(`/responses/${id}`, { response: responseData });
  return resp.data;
};

export const deleteResponse = async (id) => {
  const resp = await api.delete(`/responses/${id}`);
  return resp.data;
};