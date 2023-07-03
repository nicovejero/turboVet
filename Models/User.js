import { DataTypes, Model } from "sequelize";
import connectionDb from "../database/database.js";
import bcrypt from "bcrypt";

class User extends Model{}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salt: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      roleId: {
        type: DataTypes.INTEGER,
        defaultValue: 2,
      },
},
{
    sequelize: connectionDb,
    modelName: "User"
})

User.beforeCreate(async (user) => {
    const salt = await bcrypt.genSalt();
    user.salt = salt;
  
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  });

export default User;