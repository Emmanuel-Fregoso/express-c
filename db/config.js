import { Sequelize } from 'sequelize';
import pg from 'pg';

console.log(process.env.DB_PASSWORD)

export const db = new Sequelize('postgresql://postgres.srksqeedpoyfcoqamket:7ecdz5pjL8KX4YJN@aws-0-us-east-2.pooler.supabase.com:6543/postgres',
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