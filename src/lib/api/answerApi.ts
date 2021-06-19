import axios from './api';

export const submitAnswer = async (id: string, answers: any) => {
  const response = await axios.post(`/survey/submit/${id}`, { answer: answers }).catch((error) => ({ ...error.response, status: false }));
  console.log(response.data);
  return { ...response.data, status: true };
};

export const submitAnswer2 = async (id: string) => {
  const response = await axios.post(`/survey/submit/${id}`).catch((error) => ({ ...error.response, status: false }));
  console.log(response.data);
  return { ...response.data, status: true };
};