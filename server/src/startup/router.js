import express from 'express';
import ApiError from '../errors/ApiError.js';
import productRouter from '../routes/product.js';

const router = express.Router();

router.use('/product', productRouter);
router.use((req, res) => ApiError.notFound(`${req.method} ${req.url}: Page Not Found!`));

export default router;