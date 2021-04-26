import { mutationType } from 'nexus';

export const Mutation = mutationType({
  definition(t) {
    t.crud.createOneUser(),
      t.crud.updateOneUser(),
      t.crud.deleteOneUser()
  }
});