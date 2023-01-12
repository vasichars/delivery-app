import express from 'express';
import validate from '../middleware/validate.js';
import controller from '../controllers/product.js';
import { getProducts } from '../controllers/product-validation.js';

const router = express.Router();

router.get('/', validate(getProducts), controller.getProducts);

export default router;