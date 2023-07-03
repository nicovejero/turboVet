import { Pet } from '../Models/index.js';

const petSeed = async () => {
  try {
    await Pet.bulkCreate([{ 
      name: 'Huesos',
      age: '5',
      weight: '5.3',
      owner: '1',
      isSick: 'false',
    },{ 
      name: 'Ayudante de Santa',
      age: '7',
      weight: '6.4',
      owner: '2',
      isSick: 'true',
    },{ 
      name: 'Shura',
      age: '11',
      weight: '9.5',
      owner: '3',
      isSick: 'false',
    },]);
  } catch (error) {
    console.log(error.message);
  }
};

export default petSeed;
