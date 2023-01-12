import express from 'express';
import controller from '../controllers/order.js';

const router = express.Router();

router.get('/', controller.getOrders);
router.post('/', controller.createOrder);
router.put('/:id', controller.updateOrder);
router.get('/pending', controller.getPendingOrders);

export default router;