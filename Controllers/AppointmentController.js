import { Appointment } from "../Models/index.js";

class AppointmentController{
    constructor(){
    }
    getAllAppointments=async(req,res,next)=>{
        try {
            const result= Appointment
            res.send("get all Appointments!!!!!");
        } catch (error) {
            
        }
    }
    getAppointmentById=async(req,res,next)=>{
        try {
            res.send("Appointment Created Successfully")
            } catch (error) {
        }
    }
    updateAppointmentById=async(req,res,next)=>{
        try {
            const result= Appointment
        } catch (error) {
            
        }
    }
    deleteAppointmentById=async(req,res,next)=>{
        try {
            const result= Appointment
        } catch (error) {
            
        }
    }
    createAppointment=async(req,res,next)=>{
        try {
            const {firstName, password} = req.body;
            const result= await Appointment.createAppointment({firstName, password})
            console.log("result: ", result);
            res.send("Appointment Created Successfully")
        } catch (error) {
            res.status(400).send({success: false, result:error.message});
            
        }
    }
}

export default AppointmentController