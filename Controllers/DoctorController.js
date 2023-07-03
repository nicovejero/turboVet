import { Doctor } from '../Models/index.js';

class DoctorController {
  constructor() {}
  getAllDoctors = async (req, res, next) => {
    try {
      const result = await Doctor.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email', 'specialty'],
        include: [
          {
            model: Role,
            as: 'role',
            attributes: ['roleName'],
          },
        ],
      });
      if (result.length === 0) throw new Error('doctors not found');
      res.status(200).send({ success: true, message: 'Doctors found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  getDoctorById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Doctor.findOne({
        attributes: ['id', 'firstName', 'lastName', 'email', 'specialty'],
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('doctor not found');
      res.status(200).send({ success: true, message: 'doctor found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  updateDoctorById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, password, email, specialty, role } = req.body;
      const result = await Doctor.update({ where: {
        id: id
      },
        firstName,
        lastName,
        password,
        email,
        specialty,
        role,
      });
      if (!result.dataValues) throw new Error('Doctor creation has failed');
      res.status(200).send({ success: true, message: 'Doctor created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  deleteDoctorById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Doctor.destroy({
        where: {
          id: id,
        }
      });
      if (!result) throw new Error('Doctor cannot be deleted');
      res.status(200).send({ success: true, message: 'Doctor Deleted Successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  createDoctor = async (req, res, next) => {
    try {
      const { firstName, lastName, password, email, specialty, role } = req.body;
      const result = await Doctor.create({
        firstName,
        lastName,
        password,
        email,
        specialty,
        role,
      });
      if (!result.dataValues) throw new Error('Doctor creation has failed');
      res.status(200).send({ success: true, message: 'Doctor created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default DoctorController;