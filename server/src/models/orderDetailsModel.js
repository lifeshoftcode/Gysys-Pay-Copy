import { DataTypes } from "sequelize";
import { sequelize } from "../database.js";

export const OrderDetails = sequelize.define('OrderDetails', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
        },
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
        },
    },
    
}, {
    modelName: 'OrderDetails',
})