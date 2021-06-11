import { objectType } from 'nexus';

export const Barber = objectType({
  name: 'Barber',
  definition(t) {
    t.model.id(),
      t.model.barberLocation(),
      t.model.barberName(),
      t.model.description(),
      t.model.photos(),
      t.model.openOnWeekends(),
      t.model.user(),
      t.model.appointment(),
      t.model.createdAt(),
      t.model.updatedAt()
  }
});
