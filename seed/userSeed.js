import { User } from '../Models/index.js';

const userSeed = async () => {
  try {
    await User.bulkCreate([
      { 
        firstName: 'Administrador',
        lastName: 'Administrador',
        password: '123456789',
        email: '123@456.789',
        roleId: '1'
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

export default userSeed;
