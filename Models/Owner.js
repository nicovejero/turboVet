import { DataTypes } from "sequelize";
import User from "./User.js";
import connectionDb from "../database/database.js";

class Owner extends User{}

Owner.init({
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
},
{
    sequelize: connectionDb,
    modelName: "Owner"
})

export default Owner;