import { Doctor } from '../Models/index.js';

const doctorSeed = async () => {
  try {
    await Doctor.bulkCreate([{ 
      firstName: 'Nick',
      lastName: 'Rivera',
      password: '123456789',
      email: 'nrivera@simpsons.com',
      specialty: 'Chamuyologo',
      role: '3'
    },{ 
      firstName: 'Julius',
      lastName: 'Hibbert',
      password: '123456789',
      email: 'jhibbert@simpsons.com',
      specialty: 'Medico General',
      role: '3'
    },{ 
      firstName: 'Peperino',
      lastName: 'Pomoro',
      password: '123456789',
      email: 'ppomoro@simpsons.com',
      specialty: 'Cirujano',
      role: '3'
    },
  ]);
  } catch (error) {
    console.log(error.message);
  }
};

export default doctorSeed;
