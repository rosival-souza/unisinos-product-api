// src/services/productService.ts
import axios from 'axios';
import dotenv from 'dotenv';
import { TickerPrice } from '../types/product';

dotenv.config();

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.binance.com/api/v3/ticker',
});

export const getAllPrices = async (): Promise<TickerPrice[]> => {
  const response = await api.get<TickerPrice[]>('/price');
  return response.data;
};
