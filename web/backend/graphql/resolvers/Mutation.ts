import { objectType, nonNull, stringArg } from 'nexus';
import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { Context } from '../../context';
import { getUserId } from '../../utils/getUserId';

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, args, context: Context) => {
        const hashedPassword = await hash(args.password, 10);

        const user = await context.prisma.user.create({
          data: {
            email: args.email,
            password: hashedPassword,
          },
        })

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET),
          user,
        }
      },
    })
  }
})
