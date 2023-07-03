import { Appointment } from '../Models/index.js';

class AppointmentController {
  constructor() {}
  getAllAppointments = async (req, res, next) => {
    try {
      const result = await Appointment.findAll({
        attributes: ['doctor', 'owner', 'pet', 'description'],
      });
      if (result.length === 0) throw new Error('Appointments not found');
      res.status(200).send({ success: true, message: 'Appointments found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  getAppointmentById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Appointment.findOne({
        attributes: ['doctor', 'owner', 'pet', 'description'],
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('Appointment not found');
      res.status(200).send({ success: true, message: 'Appointment found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  updateAppointmentById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { doctor, owner, pet, description} = req.body;
      const result = await Appointment.update({ where: {
        id: id
      },
        owner,
        doctor,
        pet,
        description
      });
      if (!result.dataValues) throw new Error('Appointment creation has failed');
      res.status(200).send({ success: true, message: 'Appointment created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  deleteAppointmentById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Appointment.destroy({
        where: {
          id: id,
        }
      });
      if (!result) throw new Error('Appointment cannot be deleted');
      res.status(200).send({ success: true, message: 'Appointment Deleted Successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  createAppointment = async (req, res, next) => {
    try {
      const { doctor, owner, pet, description} = req.body;
      const result = await Appointment.create({
        owner,
        doctor,
        pet,
        description
      });
      if (!result.dataValues) throw new Error('Appointment creation has failed');
      res.status(200).send({ success: true, message: 'Appointment created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default AppointmentController;