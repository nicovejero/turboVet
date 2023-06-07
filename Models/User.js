import { DataTypes, Model} from "sequelize";
import connectionDb from "../database/database.js";

class User extends Model{}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize: connectionDb,
    modelName: "User"
})

export default User;