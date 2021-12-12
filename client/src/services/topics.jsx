import api from './apiConfig';

export const getAllTopics = async () => {
  const resp = await api.get('/topics');
  return resp.data;
};

export const getOneTopic = async (id) => {
  const resp = await api.get(`/topics/${id}`);
  return resp.data;
};

export const postTopic = async (topicData) => {
  const resp = await api.post('/topics', { topic: topicData });
  return resp.data;
};

export const putTopic = async (id, topicData) => {
  const resp = await api.put(`/topics/${id}`, { topic: topicData });
  return resp.data;
};