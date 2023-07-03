import { User } from "../Models/index.js";

class UserController{
    constructor(){
    }
    getAllUsers=async(req,res,next)=>{
        try {
            const result= await User.findAll();
            if (result.length === 0) throw new Error("No se encontraron usuarios!");
            res.status(200).send({ sucess: true, message: "Usuarios encontrados", result});
        } catch (error) {
            
        }
    }
    getUserById=async(req,res,next)=>{
        try {
            const { id } = req.params;
            const result= await User.findAll({
                where: {
                    id,
                },
            })
            res.status(200).send({ sucess: true, message: "User obtained successfully", result});
            if (result.length === 0) throw new Error("User not found");
            res.status(400).send({success: false, result:error.message});
        } catch (error) {
            
        }
    }
    createUser=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await User.create({firstName, password})
            if (!result.dataValues) throw new Error("User creation failed");
            console.log("result: ", result);
            res.status(200).send("User Created Successfully")
        } catch (error) {
            res.status(400).send({ sucess: true, message: "Usuario encontrado", result});
        }
    }
    updateUserById=async(req,res,next)=>{
        try {
            const { id } = req.params;
            const result= await User.update({
                where: {
                    id,
                }
            })
            res.status(200).send("User Updated Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
        }
    }
    deleteUserById=async(req,res,next)=>{
        try {
            const { id } = req.params;
            const result= await User.destroy({
                where: {
                    id,
                },
            })
            res.status(200).send("User Deleted Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
        }
    }
}

export default UserController;