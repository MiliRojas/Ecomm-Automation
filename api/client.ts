import axios from 'axios';

const baseURL = process.env.BASE_URL
  ? `${process.env.BASE_URL}/api`
  : 'https://automationexercise.com/api';

export const apiClient = axios.create({
  baseURL,
});