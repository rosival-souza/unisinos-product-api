// src/routes/productRoutes.ts
import { Router } from 'express';
import { fetchProducts, addProducts } from '../controllers/productController';

const router = Router();

router.get('/products', fetchProducts);
router.post('/products', addProducts);

export default router;
