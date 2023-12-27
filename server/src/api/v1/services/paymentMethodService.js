import { PaymentMethod } from '../../../models/paymentMethodModel.js';

export const PaymentMethodService = {
    createPaymentMethod: async (data) => {
        return await PaymentMethod.create(data);
    },
    getPaymentMethod: async (id) => {
        return await PaymentMethod.findByPk(id);
    },
    getPaymentMethods: async () => {
        return await PaymentMethod.findAll();
    },
    updatePaymentMethod: async (id, data) => {
        const paymentMethod = await PaymentMethod.findByPk(id);
        if (paymentMethod) {
            return await paymentMethod.update(data);
        }
        return null;
    },
    deletePaymentMethod: async (id) => {
        const paymentMethod = await PaymentMethod.findByPk(id);
        if (paymentMethod) {
            await paymentMethod.destroy();
            return true;
        }
        return false;
    }
};