import express from 'express';
import ApiError from '../errors/ApiError.js';
import productRouter from '../routes/product.js';
import orderRouter from '../routes/order.js'; 

const router = express.Router();

router.use('/product', productRouter);
router.use('/order', orderRouter);
router.use((req, res) => ApiError.notFound(`${req.method} ${req.url}: Page Not Found!`));

export default router;