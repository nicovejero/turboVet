import { DataTypes, Model} from "sequelize";
import connectionDb from "../database/database.js";

class Appointment extends Model{}

Appointment.init({
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
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
    }
},
{
    sequelize: connectionDb,
    modelName: "Appointment"
})

export default Appointment;