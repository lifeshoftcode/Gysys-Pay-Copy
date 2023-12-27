import { sequelize } from '../database.js'; // Importa la instancia de Sequelize

import { Customer } from './customerModel.js';
import { Address } from './addressModel.js';
import { ApplicationDetails } from './applicationDetailsModel.js';
import { Transaction } from './transactionModel.js';
import { PaymentMethod } from './paymentMethodModel.js';
import { CustomerSupport } from './customerSupportModel.js';
import { Order } from './orderModel.js';
import { Product }  from './productModel.js';
import { OrderDetails } from './orderDetailsModel.js';                                  
import { TransactionErrorLog } from './transactionErrorLogModel.js';
import { PaymentGatewayRequest } from './PaymentGatewayRequestModel.js';
import { PaymentGatewayResponse } from './PaymentGatewayResponseModel.js';

// Relación entre Customer y Address
Customer.hasOne(Address, { foreignKey: 'customerId' });
Address.belongsTo(Customer, { foreignKey: 'customerId' });

// Relación entre Customer y customer Support
Customer.hasMany(CustomerSupport, { foreignKey: 'customerId' });
CustomerSupport.belongsTo(Customer, { foreignKey: 'customerId' });

// Relación entre Customere y Aplicación
ApplicationDetails.hasMany(Customer, { foreignKey: 'appId' });
Customer.belongsTo(ApplicationDetails, { foreignKey: 'appId' });

// Relación entre Pedido y transaccion
Order.hasMany(Transaction, { foreignKey: 'orderId' });
Transaction.belongsTo(Order, { foreignKey: 'orderId' });

//Relacion entre applicationDetails y order
ApplicationDetails.hasMany(Order, { foreignKey: 'appId' });
Order.belongsTo(ApplicationDetails, { foreignKey: 'appId' });

// Relacion entre Customere y Order
Customer.hasMany(Order, { foreignKey: 'customerId' });
Order.belongsTo(Customer, { foreignKey: 'customerId' });

// Relacion entre paymentMethod y transaccion
PaymentMethod.hasMany(Transaction, { foreignKey: 'paymentMethodId' });
Transaction.belongsTo(PaymentMethod, { foreignKey: 'paymentMethodId' });

// Relacion entre order y orderDetails
Order.hasMany(OrderDetails, { foreignKey: 'orderId' });
OrderDetails.belongsTo(Order, { foreignKey: 'orderId' });

// Relacion entre product y orderDetails
Product.hasMany(OrderDetails, { foreignKey: 'productId' });
OrderDetails.belongsTo(Product, { foreignKey: 'productId' });

Transaction.hasOne(PaymentGatewayResponse, { foreignKey: 'transactionId' });
PaymentGatewayResponse.belongsTo(Transaction, { foreignKey: 'transactionId' });

Transaction.hasOne(PaymentGatewayRequest, { foreignKey: 'transactionId' });
PaymentGatewayRequest.belongsTo(Transaction, { foreignKey: 'transactionId' });

Transaction.hasMany(TransactionErrorLog, { foreignKey: 'transactionId' });
TransactionErrorLog.belongsTo(Transaction, { foreignKey: 'transactionId' });



export {
    Customer,
    Address,
    ApplicationDetails,
    Transaction,
    PaymentMethod,
    CustomerSupport,
    Order,
    Product,
    OrderDetails,
    TransactionErrorLog,
    PaymentGatewayRequest,
    PaymentGatewayResponse,

};
