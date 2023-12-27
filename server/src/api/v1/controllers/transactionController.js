import { TransactionService } from "../services/transactionService.js";

export const createTransaction = async (req, res) => {
    try {
        const transaction = await TransactionService.createTransaction(req.body);
        
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export  const initializeTransaction = async (req, res) => {
    try {
        const transaction = await TransactionService.initialTransaction(req.body);
        res.status(201).json(transaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
export const getTransaction = async (req, res) => {
    try {
        const transaction = await TransactionService.getTransaction(req.params.id);
        if (transaction) {
            res.status(200).json(transaction);
        } else {
            res.status(404).json({ message: 'Transaccion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const getTransactions = async (req, res) => {
    try {
        const transactions = await TransactionService.getTransactions();
        if (transactions) {
            res.status(200).json(transactions);
        } else {
            res.status(404).json({ message: 'Transacciones no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const updateTransaction = async (req, res) => {
    try {
        const updated = await TransactionService.updateTransaction(req.params.id, req.body);
        if (updated) {
            res.status(200).json({ message: 'Transaccion actualizada correctamente' });
        } else {
            res.status(404).json({ message: 'Transaccion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export const deleteTransaction = async (req, res) => {
    try {
        const deleted = await TransactionService.deleteTransaction(req.params.id);
        if (deleted) {
            res.status(200).json({ message: 'Transaccion eliminada correctamente' });
        } else {
            res.status(404).json({ message: 'Transaccion no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
