import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

export const PaymentGatewayResponse = sequelize.define('PaymentGatewayResponse', {
    responseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    transactionId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    gatewayName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responseCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    authorizationCode: {
        type: DataTypes.STRING,
        allowNull: true // Asumiendo que puede ser nulo
    },
    retrievalReferenceNumber: {
        type: DataTypes.STRING,
        allowNull: true // Asumiendo que puede ser nulo
    },
    idempotencyKey: {
        type: DataTypes.STRING,
        allowNull: true // Asumiendo que puede ser nulo
    },
    paymentGatewayResponse: {
        type: DataTypes.TEXT, // Utiliza TEXT si esperas una respuesta larga
        allowNull: false
    },
    providerDetailedResponse: {
        type: DataTypes.TEXT, // Utiliza TEXT si esperas una respuesta larga
        allowNull: true // Asumiendo que puede ser nulo
    },
}, {
    tableName: 'PaymentGatewayResponse', 
});
