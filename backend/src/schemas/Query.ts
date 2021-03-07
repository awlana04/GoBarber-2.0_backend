import { queryType } from 'nexus';

export const Query = queryType({
  definition(t) {
    // Appointments
    t.crud.appointment(),
    t.crud.appointments()
  }
});
