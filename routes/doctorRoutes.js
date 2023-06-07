import { Router } from "express";
import DoctorController from "../Controllers/DoctorController.js";

const doctorRoutes = Router();
const doctorController = new DoctorController();

doctorRoutes.get ("/", doctorController.getAllDoctors);
doctorRoutes.get ("/:id", doctorController.getDoctorById);
doctorRoutes.post ("/", doctorController.createDoctor);
doctorRoutes.put ("/:id", doctorController.updateDoctorById);
doctorRoutes.delete ("/:id", doctorController.deleteDoctorById);

export default doctorRoutes;