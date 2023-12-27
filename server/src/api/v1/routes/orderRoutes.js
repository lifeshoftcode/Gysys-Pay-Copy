import express from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, updateOrder } from '../controllers/orderController.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getOrders);

router.get('/:orderId', getOrder);
router.put('/:orderId', updateOrder);
router.delete('/:orderId', deleteOrder);


export default router;
