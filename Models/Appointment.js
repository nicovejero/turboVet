import { DataTypes, Model } from 'sequelize';
import connectionDb from '../database/database.js';

class Appointment extends Model {}

Appointment.init(
  {
    owner: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    doctor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: connectionDb,
    modelName: 'Appointment',
  },
);

export default Appointment;
