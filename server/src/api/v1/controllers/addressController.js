import {AddressService }from '../services/addressService.js';
export const createAddress = async (req, res) => {
    try {
        const address = await AddressService.createAddress(req.body);
        res.status(201).json(address);
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getAddress = async (req, res) => {
    try {
        const address = await AddressService.getAddress(req.params.id);
        if (address) {
            res.status(200).json(address);
        } else {
            res.status(404).json({ message: 'Direccion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getAddresses = async (req, res) => {
    try {
        const addresses = await AddressService.getAddresses();
        if (addresses) {
            res.status(200).json(addresses);
        } else {
            res.status(404).json({ message: 'Direcciones no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateAddress = async (req, res) => {
    try {
        const updated = await AddressService.updateAddress(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Direccion actualizada correctamente' });
        } else {
            res.status(404).json({ message: 'Direccion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteAddress = async (req, res) => {
    try {
        const deleted = await AddressService.deleteAddress(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Direccion eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Direccion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}