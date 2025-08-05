import axios from 'axios';

const API = axios.create({
  baseURL: 'https://productpagination.onrender.com/api',
});

export default API;
