import express from 'express';
import { createCustomerSupport, deleteCustomerSupport, getCustomerSupport, getCustomerSupports, updateCustomerSupport } from '../controllers/customerSupportController.js';

const router = express.Router();

router.post('/', createCustomerSupport);
router.get('/', getCustomerSupports);
router.get('/:customerSupportId', getCustomerSupport);
router.put('/:customerSupportId', updateCustomerSupport);
router.delete('/:customerSupportId', deleteCustomerSupport);

export default router;


