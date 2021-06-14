import axios from 'axios';
import { getToken } from '../utils/loginManager';

// DEV
axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'https://psql7n5w60.execute-api.us-east-1.amazonaws.com/';

axios.interceptors.request.use(
  async (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers = {
      Authorization: `Bearer ${getToken()}`,
    };
    return config;
  },
);

export default axios;
