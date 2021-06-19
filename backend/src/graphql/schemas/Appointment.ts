import { objectType } from 'nexus';

export const Appointment = objectType({
  name: 'Appointment',
  definition(t) {
    t.model.id(),
      t.model.date(),
      t.model.user(),
      t.model.barber(),
      t.model.createdAt(),
      t.model.updatedAt()
  }
})
