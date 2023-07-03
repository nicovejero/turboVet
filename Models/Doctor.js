import { DataTypes, Model } from 'sequelize';
import User from './User.js';
import connectionDb from '../database/database.js';

function getModelAttributes(model) {
  return Object.assign({}, model.rawAttributes);
}

class Doctor extends Model {}

Doctor.init(
  {
    ...getModelAttributes(User),
    specialty: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connectionDb,
    modelName: 'Doctor',
  },
);

export default Doctor;
