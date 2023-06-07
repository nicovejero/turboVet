import { Router } from "express";
import AppointmentController from "../Controllers/AppointmentController.js";

const appointmentRoutes = Router();
const appointmentController= new AppointmentController();

appointmentRoutes.get ("/", appointmentController.getAllAppointments);
appointmentRoutes.get ("/:id", appointmentController.getAppointmentById);
appointmentRoutes.post ("/", appointmentController.createAppointment);
appointmentRoutes.put ("/:id", appointmentController.updateAppointmentById);
appointmentRoutes.delete ("/:id", appointmentController.deleteAppointmentById);

export default appointmentRoutes;