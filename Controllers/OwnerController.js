import { Owner } from '../Models/index.js';

class OwnerController {
  constructor() {}
  getAllOwners = async (req, res, next) => {
    try {
      const result = await Owner.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
        include: [
          {
            model: Role,
            as: 'role',
            attributes: ['roleName'],
          },
        ],
      });
      if (result.length === 0) throw new Error('Owners not found');
      res.status(200).send({ success: true, message: 'Owners found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  getOwnerById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Owner.findOne({
        attributes: ['id', 'firstName', 'lastName', 'email', 'phoneNumber'],
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('Owner not found');
      res.status(200).send({ success: true, message: 'Owner found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  updateOwnerById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { firstName, lastName, password, email, phoneNumber, role } = req.body;
      const result = await Owner.update({ where: {
        id: id
      },
        firstName,
        lastName,
        password,
        email,
        phoneNumber,
        role,
      });
      if (!result.dataValues) throw new Error('Owner creation has failed');
      res.status(200).send({ success: true, message: 'Owner created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  deleteOwnerById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Owner.destroy({
        where: {
          id: id,
        }
      });
      if (!result) throw new Error('Owner cannot be deleted');
      res.status(200).send({ success: true, message: 'Owner Deleted Successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
  
  createOwner = async (req, res, next) => {
    try {
      const { firstName, lastName, password, email, phoneNumber, role } = req.body;
      const result = await Owner.create({
        firstName,
        lastName,
        password,
        email,
        phoneNumber,
        role,
      });
      if (!result.dataValues) throw new Error('Owner creation has failed');
      res.status(200).send({ success: true, message: 'Owner created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default OwnerController;