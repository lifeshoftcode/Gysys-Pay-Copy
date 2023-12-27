

// services/clientService.js
import { sequelize } from '../../../database.js';
import { Customer, Address } from '../../../models/index.js';

export const CustomerService = {
    createCustomer: async (data) => {
        if (!data) {
            throw new Error('Datos de cliente');
        }
        return await Customer.create(data);
    },
    createCustomerWithAddress: async (data) => {
        let transaction = null;
        try {
            // Validación de los datos de entrada
            if (!data.customer || !data.address) {
                throw new Error('Datos de cliente y dirección requeridos');
            }
            // Iniciar una transacción
            transaction = await sequelize.transaction();

            // Crear el cliente
            const customer = await Customer.create(data.customer, { transaction });
            const address = await Address.create({
                ...data.address,
                clientId: customer.id,
            }, { transaction });

            // Si todo sale bien, confirma la transacción
            await transaction.commit();
            return { customer, address };
        } catch (error) {
            // Si hay errores, deshacer la transacción
            if (transaction) await transaction.rollback();
            throw error;
        }
    },
    getCustomer: async (id) => { return await Customer.findByPk(id); },
    getCustomers: async () => { return await Customer.findAll(); },
    updateCustomer: async (id, data) => {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            throw new Error('Cliente no encontrado');
        }
        return await customer.update(data);
    },
    deleteCustomer: async (id) => {
        const customer = await Customer.findByPk(id);
        if (!customer) {
            throw new Error('Cliente no encontrado');
        }
        await customer.destroy();
        return true;
    }
};

