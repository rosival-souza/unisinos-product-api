// src/services/productService.ts
import axios from 'axios';
import dotenv from 'dotenv';
import { TickerPrice } from '../types/product';
import { filterDataObject } from '../utils/filterData';

dotenv.config();

const api = axios.create({
  baseURL: process.env.API_BASE_URL || 'https://api.binance.com/api/v3/ticker',
});

export const getAllPrices = async (): Promise<TickerPrice[]> => {
  const response = await api.get<TickerPrice[]>('/price');
  const filter = filterDataObject(response.data, 20)
  return filter;
};
