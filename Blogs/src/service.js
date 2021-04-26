import axios from 'axios';

export const Service = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`
})