import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

export const PaymentGatewayRequest = sequelize.define('PaymentGatewayRequest', {
    // Asumiendo que `requestID` es una columna autoincremental y la clave primaria.
    requestID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    orderID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Aquí deberías tener una relación definida si `orderID` es una clave foránea.
      references: {
        model: 'Orders', // Esto debería coincidir con el nombre del modelo de Order que hayas definido.
        key: 'iid',
      }
    },
    gatewayName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paymentGatewayRequest: {
      type: DataTypes.STRING, // O el tipo de dato adecuado si se espera un objeto JSON, usarías DataTypes.JSON
      allowNull: false
    },
    requestData: {
      type: DataTypes.TEXT, // o DataTypes.JSON si estás almacenando un objeto JSON
      allowNull: true // o `false` si es un campo obligatorio
    }
  }, {
    // opciones adicionales del modelo
    timestamps: false, // si no quieres que DataTypes maneje automáticamente las columnas `createdAt` y `updatedAt`
    tableName: 'PaymentGatewayRequest' // si el nombre de la tabla en la base de datos no coincide exactamente con el nombre del modelo
  });
  

  