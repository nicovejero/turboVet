import { Pet } from '../Models/index.js';

class PetController {
  constructor() {}
  getAllPets = async (req, res, next) => {
    try {
      const result = await Pet.findAll({
        attributes: ['id', 'name', 'age', 'weight', 'isSick', 'owner'],
      });
      if (result.length === 0) throw new Error('Pets not found');
      res.status(200).send({ success: true, message: 'Pets found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  getPetById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Pet.findOne({
        attributes: ['id', 'name', 'age', 'weight', 'isSick', 'owner'],
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('pet not found');
      res.status(200).send({ success: true, message: 'pet found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  updatePetById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, age, weight, isSick, owner } = req.body;
      const result = await Pet.update({ name, age, weight, isSick, owner }, {
        where: {
          id: id
        }
      });
      if (!result) throw new Error('Pet creation has failed');
      res.status(200).send({ success: true, message: 'Pet created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  deletePetById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Pet.destroy({
        where: {
          id: id,
        }
      });
      if (!result) throw new Error('Pet cannot be deleted');
      res.status(200).send({ success: true, message: 'Pet Deleted Successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  createPet = async (req, res, next) => {
    try {
      const { name, age, weight, isSick, owner } = req.body;
      const result = await Doctor.Pet({
        name,
        age,
        weight,
        isSick,
        owner,
      });
      if (!result.dataValues) throw new Error('Pet creation has failed');
      res.status(200).send({ success: true, message: 'Pet created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default PetController;