import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id(),
      t.model.email(),
      t.model.name(),
      t.model.image(),
      t.model.profile(),
      t.model.barber(),
      t.model.appointment(),
      t.model.createdAt(),
      t.model.updatedAt()
  },
})
