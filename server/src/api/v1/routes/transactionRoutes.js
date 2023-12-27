import express from 'express';
import {
    createTransaction,
    deleteTransaction,
    initializeTransaction,
    getTransaction,
    getTransactions,
    updateTransaction,
} from '../controllers/transactionController.js';

const router = express.Router();

router.post('/', createTransaction);
router.post('/initialize', initializeTransaction);
router.get('/', getTransactions);
router.get('/:transactionId', getTransaction);
router.put('/:transactionId', updateTransaction);
router.delete('/:transactionId', deleteTransaction);

// router.post('/initialize', createTransaction);
export default router;
