import { DataTypes, Model } from 'sequelize';
import connectionDb from '../database/database.js';

class Pet extends Model {}

Pet.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isSick: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
  },
  {
    sequelize: connectionDb,
    modelName: 'Pet',
  },
);

export default Pet;
