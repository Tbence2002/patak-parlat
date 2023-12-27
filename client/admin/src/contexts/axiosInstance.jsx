import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://patak-parlat-be-production.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;