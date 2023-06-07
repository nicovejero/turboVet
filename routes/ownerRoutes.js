import { Router } from "express";
import OwnerController from "../Controllers/OwnerController.js";

const ownerRoutes = Router();
const ownerController= new OwnerController();

ownerRoutes.get ("/", ownerController.getAllOwners);
ownerRoutes.get ("/:id", ownerController.getOwnerById);
ownerRoutes.post ("/", ownerController.createOwner);
ownerRoutes.put ("/:id", ownerController.updateOwnerById);
ownerRoutes.delete ("/:id", ownerController.deleteOwnerById);

export default ownerRoutes;