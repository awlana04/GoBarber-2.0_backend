import { mutationType } from 'nexus';

export const Mutation = mutationType({
  definition(t) {
    // Appointments
    t.crud.createOneAppointment(),
    t.crud.updateOneAppointment(),
    t.crud.deleteOneAppointment()
  }
});
