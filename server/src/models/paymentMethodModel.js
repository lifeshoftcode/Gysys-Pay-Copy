import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const PaymentMethod = sequelize.define('PaymentMethod', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },  
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    config: {
        type: DataTypes.JSON,
        allowNull: false,
        
    },
}, {
    modelName: 'PaymentMethod',
});