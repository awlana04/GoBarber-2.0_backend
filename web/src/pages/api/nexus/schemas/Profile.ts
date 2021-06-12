import { objectType } from 'nexus';

export const Profile = objectType({
  name: 'Profile',
  definition(t) {
    t.model.id(),
      t.model.name(),
      t.model.avatar(),
      t.model.user(),
      t.model.createdAt(),
      t.model.updatedAt()
  }
})
