import { Sequelize } from 'sequelize';
import pg from 'pg';

console.log(process.env.DB_PASSWORD)

export const db = new Sequelize('postgres','postgres', process.env.DB_PASSWORD,
    {
        host: 'db.srksqeedpoyfcoqamket.supabase.co',
        port: 5432,
        dialect: 'postgres',
        dialectModule: pg
    }
);