import { Appointment } from '../Models/index.js';

const appointmentSeed = async () => {
  try {
    await Appointment.bulkCreate([
      { 
        pet: '1', 
        owner: '1',
        doctor: '1',
        description: 'se siente mal'
      },{ 
        pet: '1', 
        owner: '1',
        doctor: '1',
        description: 'se siente muy mal'
      },{ 
        pet: '1', 
        owner: '1',
        doctor: '1',
        description: 'se siente bien'
      },{ 
        pet: '1', 
        owner: '1',
        doctor: '1',
        description: 'Vacuna antirrabica'
      },{ 
        pet: '1', 
        owner: '1',
        doctor: '1',
        description: 'Castración'
      },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

export default appointmentSeed;
