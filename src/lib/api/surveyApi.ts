import axios from './api';

export const createSurvey = async (newSurvey:any) => {
  const response = await axios.post('/survey/create', {
    ...newSurvey,
  }).catch((error) => error.response);
  console.log(response.data);
  return response.data;
};

export const updateSurvey = async (newSurvey:any, id:string) => {
  const response = await axios.put(`/survey/update/${id}`, {
    ...newSurvey,
  }).catch((error) => error.response);
  console.log(response);
  return response.data;
};

export const publishSurvey = async (publish:boolean, id: string) => {
  const response = await axios.post(`/survey/publish/${id}}`, {
    published: publish,
  }).catch((error) => error.response);
  console.log(response);
  return response.data;
};

export const getSurveyByUser = async () => {
  const response = await axios.get('/survey/user').catch((error) => ({ ...error.response, status: false }));
  console.log(response);
  return { ...response.data, status: true };
};

export const getSurveyById = async (id: string) => {
  const response = await axios.get(`/survey/${id}`).catch((error) => ({ ...error.response, status: false }));
  console.log(response);
  return { ...response.data, status: true };
};
