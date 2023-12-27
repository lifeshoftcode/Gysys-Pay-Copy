import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';
import { APPLICATION_STATUS } from '../constants/status.js';

export const ApplicationDetails = sequelize.define('Application', {
    iid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    logoUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    css: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    redirectUrls: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: Object.values(APPLICATION_STATUS),
        defaultValue: APPLICATION_STATUS.ACTIVE
    },
}, {
    modelName: 'Application',
});