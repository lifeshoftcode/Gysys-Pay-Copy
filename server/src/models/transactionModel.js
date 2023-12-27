import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';
import { TRANSACTION_STATUS } from '../constants/status.js';

export const Transaction = sequelize.define('Transaction', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    paymentMethodId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    },
    providerResponse: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null,
    }, 
    transactionType: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    currencyCode: {
        type: DataTypes.STRING,
        allowNull: true, 
    },
    transactionId: {
        type: DataTypes.STRING, 
        allowNull: true, 
    },
    tax: {
        type: DataTypes.FLOAT,
        allowNull: true, 
    },
    paymentGatewayRequestId: {
        type: DataTypes.STRING, 
        allowNull: true, 
    },
    paymentGatewayResponseId: {
        type: DataTypes.STRING, 
        allowNull: true, 
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: Object.values(TRANSACTION_STATUS),
        defaultValue: TRANSACTION_STATUS.PENDING,
    },
    paymentDetails: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    modelName: 'Transaction',
});