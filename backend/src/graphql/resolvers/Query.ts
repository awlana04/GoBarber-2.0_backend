import { objectType, stringArg } from 'nexus';

import { Context } from '../../context';
import { getUserId } from '../../utils/getUserId';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (_parent, _args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.user.findUnique({
          where: {
            id: String(userId),
          },
        })
      },
    })

    t.nullable.field('barber', {
      type: 'Barber',
      args: {
        id: stringArg()
      },
      resolve: (_parent, { id }, context: Context) => {
        return context.prisma.barber.findUnique({
          where: {
            id: String(id),
          }
        })
      }
    })

    t.nullable.list.field('allBarbers', {
      type: 'Barber',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.barber.findMany();
      }
    })
  },
});
