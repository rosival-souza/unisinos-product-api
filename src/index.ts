// src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
