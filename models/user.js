import { DataTypes } from 'sequelize';
import { db } from '../db/config.js';

export const User = db.define(
    'User',
    {
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'users',
        timestamps: false,
    },
);