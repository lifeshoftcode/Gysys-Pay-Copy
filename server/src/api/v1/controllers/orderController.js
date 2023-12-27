import { OrderService } from "../services/orderService.js";

export const createOrder = async (req, res) => {
    try {
        const order = await OrderService.createOrder(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getOrder = async (req, res) => {
    try {
        console.log(req.params)
        const order = await OrderService.getOrder(req.params.orderId);
        if (order) {
            res.status(200).json(order);
        } else {
            res.status(404).json({ message: 'Orden no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getOrders = async (req, res) => {
    try {
        const orders = await OrderService.getOrders();
        if (orders) {
            res.status(200).json(orders);
        } else {
            res.status(404).json({ message: 'Ordenes no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateOrder = async (req, res) => {
    try {
        const updated = await OrderService.updateOrder(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Orden actualizada correctamente' });
        } else {
            res.status(404).json({ message: 'Orden no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deleteOrder = async (req, res) => {
    try {
        const deleted = await OrderService.deleteOrder(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Orden eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Orden no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
