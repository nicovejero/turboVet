import { Owner } from "../Models/index.js";

class OwnerController{
    constructor(){
    }
    getAllOwners=async(req,res,next)=>{
        try {
            const result= Owner
            res.send("get all owners!!!!!");
        } catch (error) {
            
        }
    }
    getOwnerById=async(req,res,next)=>{
        try {
            res.send("owner Created Successfully")
            } catch (error) {
        }
    }
    updateOwnerById=async(req,res,next)=>{
        try {
            const result= Owner
        } catch (error) {
            
        }
    }
    deleteOwnerById=async(req,res,next)=>{
        try {
            const result= Owner
        } catch (error) {
            
        }
    }
    createOwner=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await Owner.createOwner({firstName, password})
            console.log("result: ", result);
            res.send("owner Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
            
        }
    }
}

export default OwnerController