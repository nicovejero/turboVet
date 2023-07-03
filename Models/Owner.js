import { DataTypes, Model } from 'sequelize';
import User from './User.js';
import connectionDb from '../database/database.js';

function getModelAttributes(model) {
  return Object.assign({}, model.rawAttributes);
}

class Owner extends Model {}

Owner.init(
  {
    ...getModelAttributes(User),
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName: 'Owner',
  },
);

export default Owner;
