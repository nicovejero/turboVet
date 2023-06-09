import { Router } from 'express';
import userRoutes from './userRoutes.js';
import petRoutes from './petRoutes.js';
import appointmentRoutes from './appointmentRoutes.js';
import ownerRoutes from './ownerRoutes.js';
import doctorRoutes from './doctorRoutes.js';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/pets', petRoutes);
routes.use('/appointments', appointmentRoutes);
routes.use('/owners', ownerRoutes);
routes.use('/doctors', doctorRoutes);

export default routes;
