// src/routes/productRoutes.ts
import { Router } from 'express';
import { fetchProducts } from '../controllers/productController';

const router = Router();

router.get('/products', fetchProducts);

export default router;
