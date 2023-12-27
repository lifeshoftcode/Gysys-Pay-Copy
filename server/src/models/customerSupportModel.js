import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';
import { TICKET_STATUS } from '../constants/status.js';

export  const CustomerSupport = sequelize.define('Support', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    issueDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ticketStatus: {
        type: DataTypes.ENUM,
        values: Object.values(TICKET_STATUS),
        allowNull: false,
        defaultValue: TICKET_STATUS.OPEN,
    },
    customerIid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    modelName: 'Support',
});