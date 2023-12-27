import express from 'express';
import { createPaymentMethod, deletePaymentMethod, getPaymentMethod, getPaymentMethods, updatePaymentMethod } from '../controllers/paymentMethodController.js';

const router = express.Router();

router.post('/', createPaymentMethod);
router.get('/', getPaymentMethods);
router.get('/:paymentMethodId', getPaymentMethod);
router.put('/:paymentMethodId', updatePaymentMethod);
router.delete('/:paymentMethodId', deletePaymentMethod);

export default router;

