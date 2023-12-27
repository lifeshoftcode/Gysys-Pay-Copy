// index.js dentro de la carpeta v1
import express from 'express';
import customersRouter from './routes/customerRoutes.js';
import addressRouter from './routes/addressRoutes.js';
import applicationsDetailsRouter from './routes/applicationDetailsRoutes.js';
import orderRouter from './routes/orderRoutes.js';
import customerSupportRouter from './routes/customerSupportRoutes.js';
import paymentMethodRouter from './routes/paymentMethodRoutes.js';
import transactionsRouter from './routes/transactionRoutes.js';
const router = express.Router();

router.use("/customers", customersRouter);
router.use("/address", addressRouter);
router.use("/transaction", transactionsRouter);
router.use("/application-details", applicationsDetailsRouter);
router.use("/orders", orderRouter);
router.use("/customer-support", customerSupportRouter);
router.use("/payment-method", paymentMethodRouter);

router.get('/', (req, res) => {
    res.send('Bienvenido a la API');
});


export default router;


