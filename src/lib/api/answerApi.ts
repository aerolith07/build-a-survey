import axios from './api';

export const submitAnswer = async (id: string, answers: any) => {
  const response = await axios.post(`/survey/submit/${id}`, { answers }).catch((error) => ({ ...error.response, status: false }));
  console.log(response.data);
  return { ...response.data, status: true };
};

export const getResults = async (id: string) => {
  const response = await axios.get(`/survey/results/${id}`).catch((error) => ({ ...error.response, status: false }));
  console.log(response.data);
  return { ...response.data, status: true };
};
