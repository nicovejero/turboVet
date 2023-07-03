import { Router } from "express";
import PetController from "../Controllers/PetController.js";

const petRoutes = Router();
const petController= new PetController();

petRoutes.get ("/", petController.getAllPets);
petRoutes.get ("/:id", petController.getPetById);
petRoutes.post ("/", petController.createPet);
petRoutes.put ("/:id", petController.updatePetById);
petRoutes.delete ("/:id", petController.deletePetById);

export default petRoutes;