import { queryType } from 'nexus';

export const Query = queryType({
  definition(t) {
    // Appointments
    t.crud.appointment(),
    t.crud.appointments(),

    // Users
    t.crud.user(),
    t.crud.users(),

    // Barbers
    t.crud.barber(),
    t.crud.barbers()
  }
});
