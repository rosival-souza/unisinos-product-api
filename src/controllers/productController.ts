// src/controllers/productController.ts
import { Request, Response } from 'express';
import { getAllPrices } from '../services/productService';

export const fetchProducts = async (req: Request, res: Response) => {
    
    try {

        const products = await getAllPrices();
        res.json(products);

    } catch (error) {

        res.status(500).json({ message: 'Failed to fetch products.' });
    }
};
