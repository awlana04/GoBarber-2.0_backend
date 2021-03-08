import { objectType } from 'nexus';

export const Appointment = objectType({
  name: 'Appointment',
  definition(t) {
    t.model.id(),

    t.int('date', {
      description: "Appointment's details"
    }),

    t.int('createdAt'),
    t.int('updatedAt')
  }
});
