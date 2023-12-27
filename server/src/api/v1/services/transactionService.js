import { Customer } from '../../../models/customerModel.js';
import { Transaction } from '../../../models/transactionModel.js';
import { Address } from '../../../models/addressModel.js';
import { ApplicationDetails } from '../../../models/applicationDetailsModel.js';
import { PaymentMethod } from '../../../models/paymentMethodModel.js';
import { Order } from '../../../models/orderModel.js';
import { sequelize } from '../../../database.js';
import { OrderDetails } from '../../../models/orderDetailsModel.js';
import { Product } from '../../../models/productModel.js';
export const TransactionService = {
    createTransaction: async (data) => {
        let result = null;
        let t = sequelize.transaction();

        try {
            const applicationData = await Application.findOne({ where: { token: data.applicationToken } });
            if (!applicationData) {
                throw new Error('Aplicación no encontrada o token inválido');
            }
            const clientData = await Client.create(data.client, { transaction: t });
            const addressData = await Address.create({
                ...data.address,
                clientId: clientData.id,
            }, { transaction: t });

            const orderData = await Order.create({
                ...data.order,
                clientId: clientData.id,
                addressId: addressData.id,
                applicationId: applicationData.id,
            }, { transaction: t });

            const transactionData = await Transaction.create({
                orderId: data.order.id,
                amount: data.order.totalAmount,
            }, { transaction: t });
            // Si todo sale bien, confirma la transacción (aqui me refiero a la transacion del proceso de crear la transaccion)
            await t.commit();
            return { clientData, addressData, applicationData, transactionData };
        } catch (error) {
            await t.rollback();
            console.error('Error al crear la transacción:', error);
            throw new Error('Error al crear la transaccion');
        }

    },
    initialTransaction: async (data) => {
        let t = await sequelize.transaction();
        try {
            const applicationData = await ApplicationDetails.findOne({ where: { token: data.applicationDetails.token } });
            if (!applicationData) {
                throw new Error('Aplicación no encontrada o token inválido');
            }

            const customerData = await Customer.findOrCreate({
                where: { email: data.customer.email },
                transaction: t
            });

            const addressData = await Address.findOrCreate({
                where: { customerId: customerData[0].id },
                defaults: {
                    ...data.customer.address,
                    customerId: customerData[0].id
                },
                transaction: t
            });

            const orderData = await Order.create({
                ...data.order,
                customerId: customerData[0].id,
                appId: applicationData.id,
            }, { transaction: t });

            for (const item of data.order.items) {
                const productData = await Product.findOrCreate({
                    where: { id: item.productId },
                    defaults: { ...item }, // Asumiendo que item contiene todos los campos necesarios
                    transaction: t
                });

                await OrderDetails.create({
                    orderId: orderData.id,
                    productId: productData[0].id,
                    quantity: item.quantity,
                    price: item.price,
                }, { transaction: t });
            }

            await t.commit();
            return {
                success: true,
                data: {
                    orderId: orderData.id, // ID único del pedido
                    customerId: customerData[0].id, // ID único del cliente
                    addressId: addressData[0].id, // ID único de la dirección
                    applicationId: applicationData.id, // ID único de la aplicación
                    // Puedes agregar más datos si son necesarios para el frontend
                }
            };

        } catch (error) {
            await t.rollback();
            console.error('Error al inicializar la transacción:', error);
            throw error;
        }
    },
    getTransaction: async (id) => {
        return await Transaction.findByPk(id);
    },
    getTransactions: async () => {
        return await Transaction.findAll();
    },
    updateTransaction: async (id, data) => {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            return await transaction.update(data);
        }
        return null;
    },
    deleteTransaction: async (id) => {
        const transaction = await Transaction.findByPk(id);
        if (transaction) {
            await transaction.destroy();
            return true;
        }
        return false;
    }
};