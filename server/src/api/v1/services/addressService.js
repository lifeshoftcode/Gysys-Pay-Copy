// services/addressService.js

import { Address } from '../../../models/addressModel.js';

export const AddressService = {
    createAddress: async (data) => {
        return await Address.create(data);
    },
    getAddress: async (id) => {
        return await Address.findByPk(id);
    },
    getAddresses: async () => {
        return await Address.findAll();
    },
    updateAddress: async (id, data) => {
        const address = await Address.findByPk(id);
        if (address) {
            return await address.update(data);
        }
        return null;
    },
    deleteAddress: async (id) => {
        const address = await Address.findByPk(id);
        if (address) {
            await address.destroy();
            return true;
        }
        return false;
    }
};
