import { Sequelize } from 'sequelize';
import pg from 'pg';

console.log(process.env.DB_PASSWORD)

export const db = new Sequelize('postgresql://postgres:7ecdz5pjL8KX4YJN@db.srksqeedpoyfcoqamket.supabase.co:5432/postgres',
    {
        dialect: 'postgres',
        dialectModule: pg,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);