//Imports
import Doctor from './Doctor.js';
import Appointment from './Appointment.js';
import Owner from './Owner.js';
import Pet from './Pet.js';
import User from './User.js';
import Role from './Role.js';

//Role relations
Role.hasMany(User, {
  foreignKey: 'roleId',
});

//User relations
User.belongsTo(Role, {
  foreignKey: 'roleId',
  as: 'role'
});

//Pet relations
Pet.belongsTo(Owner, {
  foreignKey: 'ownerId',
});

//Owner relations
Owner.hasMany(Pet, {
  foreignKey: 'petId',
});

//Appointment relations
Appointment.hasOne(Pet, {
  foreignKey: 'petId',
});

Appointment.hasMany(Owner, {
  foreignKey: 'ownerId',
});

Appointment.hasMany(Doctor, {
  foreignKey: 'doctorId',
});


//Exports
export { Doctor, Appointment, Owner, Pet, User, Role };
