import userSeed from './userSeed.js';
import petSeed from './petSeed.js';
import appointmentSeed from './appointmentSeed.js';
import ownerSeed from './ownerSeed.js';
import doctorSeed from './doctorSeed.js';
import roleSeed from './roleSeed.js';

const loadStartData = async (connectionDb) => {
  try {
    await connectionDb
      .sync({ force: true })
      .then(roleSeed)
      .then(userSeed)
      .then(doctorSeed)
      .then(ownerSeed)
      .then(petSeed)
      .then(appointmentSeed);
      console.log('Semillas cargada correctamente');
  } catch (error) {
    console.log(error.message);
  }
};

export default loadStartData;
