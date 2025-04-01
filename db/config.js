import { Sequelize } from 'sequelize';

export const db = new Sequelize('auth-express', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});