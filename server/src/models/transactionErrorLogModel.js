import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';
import { TRANSACTION_STATUS } from '../constants/status.js';

export const TransactionErrorLog = sequelize.define('TransactionErrorLog', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    errorCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    errorMessage: {
        type: DataTypes.STRING(1000),
        allowNull: false,
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    transactionId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    modelName: 'TransactionErrorLog',
});