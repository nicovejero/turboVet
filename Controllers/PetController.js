import { Pet } from "../Models/index.js";

class PetController{
    constructor(){
    }
    getAllPets=async(req,res,next)=>{
        try {
            const result= Pet
            res.status(200).send("");
        } catch (error) {
            res.status(400).send({success: false, result:error.message});            
        }
    }
    getPetById=async(req,res,next)=>{
        try {
            res.status(200).send("Pet Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
        }
    }
    updatePetById=async(req,res,next)=>{
        try {
            const result= Pet
            res.status(200).send("Pet Updated Successfully");
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
        }
    }
    deletePetById=async(req,res,next)=>{
        try {
            const { id } = req.params;
            const result = await Pet.destroy({
                where: {
                    id,
                },
            })
            res.status(200).send("Pet Deleted Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
        }
    }
    createPet=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await Pet.createPet({firstName, password})
            console.log("result: ", result);
            res.status(200).send("Pet Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
            
        }
    }
}

export default PetController