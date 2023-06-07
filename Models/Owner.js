import { DataTypes, Model} from "sequelize";
import connectionDb from "../database/database.js";

class Owner extends Model{}

Owner.init({
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
    modelName: "Owner"
})

export default Owner;