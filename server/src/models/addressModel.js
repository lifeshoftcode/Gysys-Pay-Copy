// models/address.js
import { sequelize } from '../database.js';
import { DataTypes } from 'sequelize';

export const Address = sequelize.define('Address', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    postalCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    addressType: {
        type: DataTypes.ENUM,
        values: ['BILLING', 'SHIPPING'],
        allowNull: true,
        defaultValue: 'BILLING',
    },
}, {
    modelName: 'Address',
});




