import { CustomerSupport } from "../../../models/customerSupportModel.js";

export const CustomerSupportService = {
    createCustomerSupport: async (data) => {
        return await CustomerSupport.create(data);
    },
    getCustomerSupport: async (id) => {
        return await CustomerSupport.findByPk(id);
    },
    getCustomerSupports: async () => {
        return await CustomerSupport.findAll();
    },
    updateCustomerSupport: async (id, data) => {
        const customerSupport = await CustomerSupport.findByPk(id);
        if (customerSupport) {
            return await customerSupport.update(data);
        }
        return null;
    },
    deleteCustomerSupport: async (id) => {
        const customerSupport = await CustomerSupport.findByPk(id);
        if (customerSupport) {
            await customerSupport.destroy();
            return true;
        }
        return false;
    }
};