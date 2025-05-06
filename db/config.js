import { Sequelize } from 'sequelize';

export const db = new Sequelize(`postgresql://postgres:${process.env.DB_PASSWORD}@db.srksqeedpoyfcoqamket.supabase.co:5432/postgres`);