import { Owner } from '../Models/index.js';

const ownerSeed = async () => {
  try {
    await Owner.bulkCreate([{ 
      firstName: 'Nico',
      lastName: 'Wain',
      password: '123456789',
      email: 'nwain@simpsons.com',
      phoneNumber: '011-1234-5678',
    },{ 
      firstName: 'Marce',
      lastName: 'Wain',
      password: '123456780',
      email: 'mwain@simpsons.com',
      phoneNumber: '011-1234-5678',
    },{ 
      firstName: 'Ale',
      lastName: 'Wain',
      password: '123456700',
      email: 'awain@simpsons.com',
      phoneNumber: '011-1234-5678',
    },
  ]);
  } catch (error) {
    console.log(error.message);
  }
};

export default ownerSeed;
