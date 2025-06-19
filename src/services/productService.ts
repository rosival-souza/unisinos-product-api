// src/services/productService.ts
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.binance.com/api/v3/ticker',
});

export const getAllPrices = async () => {

  const response = await api.get('/price');

  return response.data;
};
