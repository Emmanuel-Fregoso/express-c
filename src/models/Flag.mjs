import { Sequelize, DataTypes } from 'sequelize';
import { db } from '../db/config.mjs';
import { Trigger } from './Trigger.mjs';

export const Flag = db.define(
    'Flag',
    {
        name: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: 'flags',
        timestamps: false,
    },
);

const FlagsTriggers = db.define(
    'FlagsTriggers',
    {
        flag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Flag,
                key: 'id'
            },
            field: 'flag_id'
        },
        trigger_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Trigger,
                key: 'id'
            },
            field: 'trigger_id'
        }
    },
    {
        tableName: 'flags_triggers',
        timestamps: false,
    },
);


Flag.belongsToMany(Trigger, { as: "fg", through: FlagsTriggers });


