import { Doctor } from "../Models/index.js";

class DoctorController{
    constructor(){
    }
    getAllDoctors=async(req,res,next)=>{
        try {
            const result= Doctor
            res.send("get all Doctors!!!!!");
        } catch (error) {
            
        }
    }
    getDoctorById=async(req,res,next)=>{
        try {
            res.send("Doctor Created Successfully")
            } catch (error) {
        }
    }
    updateDoctorById=async(req,res,next)=>{
        try {
            const result= Doctor
        } catch (error) {
            
        }
    }
    deleteDoctorById=async(req,res,next)=>{
        try {
            const result= Doctor
        } catch (error) {
            
        }
    }
    createDoctor=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await Doctor.createDoctor({firstName, password})
            console.log("result: ", result);
            res.send("Doctor Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
            
        }
    }
}

export default DoctorController