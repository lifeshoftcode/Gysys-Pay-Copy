import { PaymentMethodService } from "../services/paymentMethodService.js";

export const createPaymentMethod = async (req, res) => {
    try {
        const paymentMethod = await PaymentMethodService.createPaymentMethod(req.body);
        res.status(201).json(paymentMethod);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getPaymentMethod = async (req, res) => {
    try {
        const paymentMethod = await PaymentMethodService.getPaymentMethod(req.params.id);
        if (paymentMethod) {
            res.status(200).json(paymentMethod);
        } else {
            res.status(404).json({ message: 'Metodo de pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getPaymentMethods = async (req, res) => {
    try {
        const paymentMethods = await PaymentMethodService.getPaymentMethods();
        if (paymentMethods) {
            res.status(200).json(paymentMethods);
        } else {
            res.status(404).json({ message: 'Metodos de pago no encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updatePaymentMethod = async (req, res) => {
    try {
        const updated = await PaymentMethodService.updatePaymentMethod(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Metodo de pago actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Metodo de pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deletePaymentMethod = async (req, res) => {
    try {
        const deleted = await PaymentMethodService.deletePaymentMethod(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Metodo de pago eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Metodo de pago no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

