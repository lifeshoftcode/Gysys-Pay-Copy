

export const createTransactionErrorLog = async (req, res) => {
    try {
        const transactionErrorLog = await TransactionService.createTransactionErrorLog(req.body);
        
        res.status(201).json(transactionErrorLog);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
