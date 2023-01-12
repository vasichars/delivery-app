import express from 'express';
import validate from '../middleware/validate.js';
import controller from '../controllers/order.js';
import { createOrder, updateOrder } from '../controllers/order-validation.js';

const router = express.Router();

router.get('/', controller.getOrders);
router.post('/', validate(createOrder), controller.createOrder);
router.put('/:id', validate(updateOrder), controller.updateOrder);
router.get('/pending', controller.getPendingOrders);

export default router;