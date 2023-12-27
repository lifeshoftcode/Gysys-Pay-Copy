// api/v1/clients/clientRoutes.js
import express from 'express';
import { createAddress, deleteAddress, getAddress, getAddresses, updateAddress } from '../controllers/addressController.js';

const router = express.Router();

router.post('/', createAddress);
router.get('/', getAddresses);
router.get('/:addressId', getAddress);
router.put('/:addressId', updateAddress);
router.delete('/:addressId', deleteAddress);

export default router;