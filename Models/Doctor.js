import { DataTypes, Model} from "sequelize";
import connectionDb from "../database/database.js";

class Doctor extends Model{}

Doctor.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    speciality: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize: connectionDb,
    modelName: "Doctor"
})

export default Doctor;