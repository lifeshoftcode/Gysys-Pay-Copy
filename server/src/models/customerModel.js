// models/client.js
import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js'; // Asegúrate de importar la instancia de Sequelize


export const Customer = sequelize.define('Customer', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^[0-9]{9,15}$/,
        }
    },
    preferredPaymentMethod: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    privacyConsent: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
    },
    pageLanguage: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'en',
    },
   
}, {
    modelName: 'Client',
});


