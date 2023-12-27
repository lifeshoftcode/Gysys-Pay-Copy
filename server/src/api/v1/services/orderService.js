import { sequelize } from "../../../database.js";
import { ApplicationDetails } from "../../../models/applicationDetailsModel.js";
import { Customer, Order, Address, OrderDetails, Product } from "../../../models/index.js";


export const OrderService = {
    createOrder: async (data) => {
        let t = await sequelize.transaction();
        try {
            const applicationData = await ApplicationDetails.findOne({ where: { token: data.applicationDetails.token } });
            if (!applicationData) {
                throw new Error('Aplicación no encontrada o token inválido');
            }

            const customerData = await Customer.findOrCreate({
                where: { email: data.customer.email },
                defaults: {
                    ...data.customer,
                    appId: applicationData.iid
                },
                transaction: t
            });

            const addressData = await Address.findOrCreate({
                where: { customerId: customerData[0].iid },
                defaults: {
                    ...data.address,
                    customerId: customerData[0].iid
                },
                transaction: t
            });

            const orderData = await Order.create({
                ...data.order,
                customerId: customerData[0].iid,
                appId: applicationData.iid,


            }, { transaction: t });

            for (const item of data.order.items) {

                const productData = await Product.findOrCreate({
                    where: { id: item.id },
                    defaults: { ...item },
                    transaction: t
                });

                await OrderDetails.create({
                    orderId: orderData.iid,
                    productId: productData[0].iid,
                    quantity: item.quantity,
                    price: item.price,
                }, { transaction: t });
            }

            await t.commit();
            return {
                success: true,
                message: 'Orden creada correctamente',
                orderId: orderData.id, // ID único del pedido
                orderURL: `http://localhost:5173/cart/view/${orderData.iid}`, // URL para ver el pedido
            };

        } catch (error) {
            await t.rollback();
            console.error('Error al inicializar la transacción:', error);
            throw error;
        }
    },
    // getOrder: async (id) => {

    //     return await Order.findByPk(id);

    // },
    getOrder: async (id) => {
        return await Order.findByPk(id, {
            include: [{
                model: Customer,
                include: [Address] // Asumiendo que tienes una relación definida entre Customer y Address
            },
            {
                model: OrderDetails,
                include: [Product]
            }
            ]
        });
    },
    getOrders: async () => {
        return await Order.findAll();
    },
    updateOrder: async (id, data) => {
        const order = await Order.findByPk(id);
        if (order) {
            return await order.update(data);
        }
        return null;
    },
    deleteOrder: async (id) => {
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            return true;
        }
        return false;
    }
};