import { User } from "../Models/index.js";

class UserController{
    constructor(){
    }
    getAllUsers=async(req,res,next)=>{
        try {
            const result= await User.findAll();
            if (result.length === 0) throw new Error("No se encontraron usuarios!");
            res.send({ sucess: true, message: "Usuarios encontrados", result});
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
            });
            if (result.length === 0) throw new Error("No se encontró el usuario!");
            res.send({ sucess: true, message: "Usuario encontrado", result});
        } catch (error) {
            
        }
    }
    createUser=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await User.create({firstName, password})
            //   console.log("🚀 result:", result.dataValues);
            if (!result.dataValues) throw new Error("No se pudo crear el usuario");
            console.log("result: ", result);
            res
                .status(200)
                .send("User Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
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
        } catch (error) {
            
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
        } catch (error) {
            
        }
    }
}

export default UserController;