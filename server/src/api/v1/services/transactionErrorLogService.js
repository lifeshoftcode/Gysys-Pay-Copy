import { Customer } from '../../../models/customerModel.js';
import { Transaction } from '../../../models/transactionModel.js';
import { Address } from '../../../models/addressModel.js';
import { ApplicationDetails } from '../../../models/applicationDetailsModel.js';
import { PaymentMethod } from '../../../models/paymentMethodModel.js';
import { Order } from '../../../models/orderModel.js';
import { sequelize } from '../../../database.js';
// Importa el modelo TransactionErrorLog
import { TransactionErrorLog } from './transactionErrorLogModel.js';

// Servicios para el modelo TransactionErrorLog
export const transactionErrorLogServices = {
  // Crear un nuevo registro de error de transacción
  async createErrorLog(details) {
    try {
      const errorLog = await TransactionErrorLog.create(details);
      return errorLog;
    } catch (error) {
      // Manejo de errores
      console.error('Error al crear el registro de error de transacción:', error);
      throw error;
    }
  },

  // Recuperar un registro de error de transacción por ID
  async getErrorLogById(errorLogId) {
    try {
      const errorLog = await TransactionErrorLog.findByPk(errorLogId);
      return errorLog;
    } catch (error) {
      // Manejo de errores
      console.error('Error al recuperar el registro de error de transacción:', error);
      throw error;
    }
  },

  // Recuperar todos los registros de errores de transacciones
  async getAllErrorLogs() {
    try {
      const errorLogs = await TransactionErrorLog.findAll();
      return errorLogs;
    } catch (error) {
      // Manejo de errores
      console.error('Error al recuperar todos los registros de errores de transacciones:', error);
      throw error;
    }
  },

  // Eliminar un registro de error de transacción por ID
  async deleteErrorLog(errorLogId) {
    try {
      const result = await TransactionErrorLog.destroy({
        where: { id: errorLogId }
      });
      return result;
    } catch (error) {
      // Manejo de errores
      console.error('Error al eliminar el registro de error de transacción:', error);
      throw error;
    }
  }
};
