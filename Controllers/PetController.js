import { Pet } from "../Models/index.js";

class PetController{
    constructor(){
    }
    getAllPets=async(req,res,next)=>{
        try {
            const result= Pet
            res.send("get all pets!!!!!");
        } catch (error) {
            
        }
    }
    getPetById=async(req,res,next)=>{
        try {
            res.send("Pet Created Successfully")
            } catch (error) {
        }
    }
    updatePetById=async(req,res,next)=>{
        try {
            const result= Pet
        } catch (error) {
            
        }
    }
    deletePet=async(req,res,next)=>{
        try {
            const result= Pet
        } catch (error) {
            
        }
    }
    createPet=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await Pet.createPet({firstName, password})
            console.log("result: ", result);
            res.send("Pet Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
            
        }
    }
}

export default PetController