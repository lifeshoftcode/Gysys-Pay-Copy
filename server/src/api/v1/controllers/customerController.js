// controllers/clientController.js

import { CustomerService } from '../services/customerService.js';

export const createCustomer = async (req, res) => {
    try {
        const client = await CustomerService.createCustomer(req.body);
        res.status(201).json(client);
    
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
export const createCustomerWithAddress = async (req, res) => {
    try {
        const client = await CustomerService.createCustomerWithAddress(req.body);
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getCustomer = async (req, res) => {
    try {
        console.log(req.params)
        const client = await CustomerService.getCustomer(req.params.customerId);
        if (client) {
            res.status(200).json(client);
        } else {
            res.status(404).json({ message: 'Customer no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCustomers = async (req, res) => {
    try {
        const clients = await CustomerService.getCustomers();
        if (clients) {
            res.status(200).json(clients);
        } else {
            res.status(404).json({ message: 'Customers no encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCustomer = async (req, res) => {
    try {
        const updated = await CustomerService.updateCustomer(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Customer actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Customer no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCustomer = async (req, res) => {
    try {
        const deleted = await CustomerService.deleteCustomer(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Customer eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Customer no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};