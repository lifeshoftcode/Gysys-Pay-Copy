// api/v1/clients/clientRoutes.js
import express from 'express';
import { createCustomer, getCustomer, getCustomers, updateCustomer, deleteCustomer, createCustomerWithAddress } from '../controllers/customerController.js';
const router = express.Router();

router.post('/', createCustomer);
router.get('/', getCustomers);
router.get('/:customerId', getCustomer);
router.put('/:customerId', updateCustomer);
router.delete('/:customerId', deleteCustomer);

router.post('/with-address', createCustomerWithAddress);
export default router;