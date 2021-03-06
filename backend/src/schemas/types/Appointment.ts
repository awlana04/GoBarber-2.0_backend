import { objectType } from 'nexus';

export const Appointment = objectType({
  name: 'Appointment',
  definition(t) {
    t.model.id(),
    t.model.provider(),
    t.int('date'),
    t.int('createdAt'),
    t.int('updatedAt')
  }
});
