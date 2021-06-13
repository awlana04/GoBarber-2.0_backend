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
      resolve: async (_parent, { email, password }, context: Context) => {
        const hashedPassword = await hash(password, 10);

        const user = await context.prisma.user.create({
          data: {
            email: email,
            password: hashedPassword,
          },
        })

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET as string),
          user,
        }
      },
    })

    t.field('signin', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, context: Context) => {
        const user = await context.prisma.user.findUnique({
          where: {
            email
          }
        })

        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordValid = await compare(password, user.password as string);

        if (!passwordValid) {
          throw new Error('Invalid password');
        }

        return {
          token: sign({ userId: user.id }, process.env.APP_SECRET as string),
          user,
        }
      }
    })
  }
})
