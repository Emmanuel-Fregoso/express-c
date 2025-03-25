import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../db/config.mjs';
import { Flag } from './Flag.mjs';

export const Trigger = db.define(
  'Trigger',
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'triggers',
    timestamps: false,
  },
);

// Trigger.belongsToMany(Flag, { through: 'flags_triggers' });