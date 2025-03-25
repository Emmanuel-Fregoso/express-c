import { Sequelize } from 'sequelize';

export const db = new Sequelize('feature_flags', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

