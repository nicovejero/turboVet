import { User, Role } from '../Models/index.js';

class UserController {
  constructor() {}

  getAllUsers = async (req, res, next) => {
    try {
      const result = await User.findAll({
        attributes: ['id', 'firstName', 'lastName', 'email'],
        include: [
          {
            model: Role,
            as: 'role',
            attributes: ['roleName'],
          },
        ],
      });
      if (result.length === 0) throw new Error('users not found');
      res.send({ success: true, message: 'users found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  getUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.findOne({
        attributes: ['id', 'firstName', 'lastName', 'email'],
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('user not found');
      res.send({ success: true, message: 'user found', result });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  createUser = async (req, res, next) => {
    try {
      const { firstName, lastName, password, email, role } = req.body;
      const result = await User.create({
        firstName,
        lastName,
        password,
        email,
        role,
      });
      if (!result.dataValues) throw new Error('User creation has failed');
      res.status(200).send({ success: true, message: 'user created successfully' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };

  updateUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { nombre, apellido, password, email, role } = req.body;
      const result = await User.update({nombre, apellido, password, email, role,
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('User cannot be updated');
      res.status(200).send({ success: true, message: 'User Updated Successfully' });
    } catch (error) {

    }
  };

  deleteUserById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await User.destroy({
        where: {
          id: id,
        },
      });
      if (!result) throw new Error('User cannot be deleted');
      res.status(200).send({ success: true, message: 'User Deleted Successfully' });
    } catch (error) {
      
    }
  };

  login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const result = await User.findOne({
        where: { email },
      });
      if (!result) throw new Error('Incorrect User or Password');

      const compare = await result.validatePassword(password, result.password);
      if (!compare) throw new Error('Incorrect User or Password');
      res.status(200).send({ success: true, message: 'User login success' });
    } catch (error) {
      res.status(400).send({ success: false, result: error.message });
    }
  };
}

export default UserController;
