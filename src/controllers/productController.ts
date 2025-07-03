// src/controllers/productController.ts
import { Request, Response } from 'express';
import { getAllPrices } from '../services/productService';
import fs from 'fs/promises';
import path from 'path';

export const fetchProducts = async (req: Request, res: Response) => {
    
    try {

        const products = await getAllPrices();
        res.json(products);

    } catch (error) {

        res.status(500).json({ message: 'Failed to fetch products.' });
    }
};

export const addProducts = async (req: Request, res: Response) => {

    console.log('creating file in directory...')

    try {
        const products = await getAllPrices();

        const baseDir = path.join(__dirname, '..', 'output', 'products');

        await fs.mkdir(baseDir, { recursive: true });

        for (const product of products) {
            const productId = product.symbol || `product_${Date.now()}`;
            const filePath = path.join(baseDir, `${productId}.json`);
            await fs.writeFile(filePath, JSON.stringify(product, null, 2), 'utf-8');
        }

        res.json({ message: 'Products saved to files.', count: products.length });

    } catch (error) {
        console.error('Error saving products:', error);
        res.status(500).json({ message: 'Failed to load or save products.' });
    }
};
