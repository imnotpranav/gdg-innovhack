import api from './axios';

export const getJobs = async () => {
  const response = await api.get('/api/jobs');
  return response.data;
};