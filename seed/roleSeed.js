import { Role } from '../Models/index.js';

const roleSeed = async () => {
  try {
    await Role.bulkCreate([{ roleName: 'admin' }, { roleName: 'owner' }, { roleName: 'doctor' }]);
  } catch (error) {
    console.log(error.message);
  }
};

export default roleSeed;
