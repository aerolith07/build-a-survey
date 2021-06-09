import axios from './api';

interface RegisterUserType extends LoginUserType {
  name: string
}

interface LoginUserType {
  username: string
  password: string
}

export const registerUser = async ({ username, password, name }: RegisterUserType) => {
  const response = await axios.post('/register', { username, password, name }).catch((error) => error.response);
  if (response.status !== 200) { return { success: false, ...response.data }; }
  return { success: true };
};

export const loginUser = async ({ username, password }: LoginUserType) => {
  const response = await axios.post('/login', { username, password }).catch((error) => error.response);
  if (response.status !== 200) { return { success: false, ...response.data }; }
  return { success: true };
};

export const logoutUser = async () => {
  const response = await axios.delete('/logout').catch((error) => error.response);
  if (response.status !== 200) { return { success: false, ...response.data }; }
  return { success: true };
};
