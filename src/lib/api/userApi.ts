import { removeLoginToken, setLoginToken } from '../utils/loginManager';
import axios from './api';

interface RegisterUserType extends LoginUserType {
  name: string
}

interface LoginUserType {
  username: string
  password: string
}

// In login and register, set token for user
export const registerUser = async ({ username, password, name }: RegisterUserType) => {
  const response = await axios.post('/register', { username, password, name }).catch((error) => error.response);
  if (response.status !== 200) { return { success: false, ...response.data }; }
  setLoggedInUser(response.data.token);
  return { success: true, username: response.data.username };
};

export const loginUser = async ({ username, password }: LoginUserType) => {
  const response = await axios.post('/login', { username, password }).catch((error) => error.response);
  if (response.status !== 200) { return { success: false, ...response.data }; }
  setLoggedInUser(response.data.token);
  return { success: true, username: response.data.username };
};

// In logout, remove token for user
export const logoutUser = async () => {
  const response = await axios.delete('/logout').catch((error) => error.response);
  removeLoginToken();
  if (response.status !== 200) { return { success: false, ...response.data }; }
  return { success: true };
};

const setLoggedInUser = (token: string) => {
  setLoginToken(token);
};
