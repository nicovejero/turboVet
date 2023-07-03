import { DataTypes as DT } from 'sequelize';
import connectionDb from '../database/database.js';

const Role = connectionDb.define(
  'Role',
  {
    roleName: {
      type: DT.STRING,
      defaultValue: 'user',
    },
  },
  {
    timestamps: false,
  },
);

export default Role;
