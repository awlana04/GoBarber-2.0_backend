import { mutationType } from 'nexus';

export const Mutation = mutationType({
  definition(t) {
    // Appointments
    t.crud.createOneAppointment(),
    t.crud.updateOneAppointment(),
    t.crud.deleteOneAppointment(),

    // Users
    t.crud.createOneUser(),
    t.crud.updateOneUser(),
    t.crud.deleteOneUser(),

    // Barbers
    t.crud.createOneBarber(),
    t.crud.updateOneBarber(),
    t.crud.deleteOneBarber()
  }
});
