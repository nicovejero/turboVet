import Doctor from "./Doctor.js";
import Appointment from "./Appointment.js";
import Owner from "./Owner.js";
import Pet from "./Pet.js";
import User from "./User.js";

Pet.hasMany(Owner);

Appointment.hasOne(Pet);
Appointment.hasOne(Owner);
Appointment.hasMany(Doctor);

export {Doctor, Appointment, Owner, Pet, User}