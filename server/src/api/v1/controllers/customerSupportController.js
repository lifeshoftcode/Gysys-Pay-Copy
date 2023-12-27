import { CustomerSupportService } from "../services/customerSupportService.js";

export const createCustomerSupport = async (req, res) => {
    try {
        const customerSupport = await CustomerSupportService.createCustomerSupport(req.body);
        res.status(201).json(customerSupport);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getCustomerSupport = async (req, res) => {
    try {
        console.log(req.params)
        const customerSupport = await CustomerSupportService.getCustomerSupport(req.params.id);
        if (customerSupport) {
            res.status(200).json(customerSupport);
        } else {
            res.status(404).json({ message: 'Soporte no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getCustomerSupports = async (req, res) => {
    try {
        const customerSupports = await CustomerSupportService.getCustomerSupports();
        if (customerSupports) {
            res.status(200).json(customerSupports);
        } else {
            res.status(404).json({ message: 'Soportes no encontrados' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateCustomerSupport = async (req, res) => {
    try {
        const updated = await CustomerSupportService.updateCustomerSupport(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Soporte actualizado correctamente' });
        } else {
            res.status(404).json({ message: 'Soporte no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deleteCustomerSupport = async (req, res) => {
    try {
        const deleted = await CustomerSupportService.deleteCustomerSupport(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Soporte eliminado correctamente' });
        } else {
            res.status(404).json({ message: 'Soporte no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
