import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';
import { ORDER_STATUS } from '../constants/status.js';

export const Order = sequelize.define('Order', {
    iid:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    appId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    discount: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
    },
    shipping: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
    },
    tax: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
    },
    totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    isQuantityEditable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
    },
    status: {
        type: DataTypes.ENUM,
        values: Object.values(ORDER_STATUS),
        allowNull: false,
        defaultValue: ORDER_STATUS.PENDING,
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
}, {
    modelName: 'Order',
});