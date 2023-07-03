import { DataTypes } from "sequelize";
import User from "./User.js";
import connectionDb from "../database/database.js";

class Doctor extends User{}

Doctor.init({
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