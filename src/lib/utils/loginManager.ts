const TOKEN_KEY = 'token';

export const setLoginToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeLoginToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);
