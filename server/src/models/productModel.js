import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const Product = sequelize.define("Product", {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    tax: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0,
    },
    features: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: [] 
    },
    discount: {
        type: DataTypes.FLOAT,
        allowNull: true,
        defaultValue: 0.0,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0.0,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: "",
    },
    subscriptionPeriod: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    modelName: 'Product',
})
