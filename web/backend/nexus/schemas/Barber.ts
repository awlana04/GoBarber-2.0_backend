import { objectType } from 'nexus';

export const Barber = objectType({
  name: 'Barber',
  definition(t) {
    t.model.id(),

    t.model.barberLocation({
      description: "Barber's information"
    }),
    t.model.barberName(),
    t.model.description(),
    t.model.photos(),
    t.model.openOnWeekends(),

    t.int('createdAt'),
    t.int('updatedAt')
  }
});
