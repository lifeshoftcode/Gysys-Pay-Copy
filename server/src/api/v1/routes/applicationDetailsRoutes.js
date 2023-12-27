import express from 'express';
import { createApplication, deleteApplication, getApplication, getApplications, updateApplication } from '../controllers/applicationDetailsController.js';

const router = express.Router();

router.post('/', createApplication);
router.get('/', getApplications);
router.get('/:applicationId', getApplication);
router.put('/:applicationId', updateApplication);
router.delete('/:applicationId', deleteApplication);

export default router;

