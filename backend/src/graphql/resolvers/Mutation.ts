import { objectType, nonNull, stringArg, booleanArg, list } from 'nexus';
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
            email,
          },
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
      },
    })

    t.field('updateUser', {
      type: 'User',
      args: {
        id: stringArg(),
        name: stringArg(),
        image: stringArg()
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.user.update({
          data: {
            ...args,
          },
          where: {
            id: String(userId),
          }
        })
      }
    })

    t.field('createProfile', {
      type: 'Profile',
      args: {
        id: stringArg(),
        avatar: stringArg(),
        name: stringArg(),
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.profile.create({
          data: {
            ...args,
            user: { connect: { id: String(userId) } }
          }
        })
      }
    })

    t.field('updateProfile', {
      type: 'Profile',
      args: {
        id: stringArg(),
        name: stringArg(),
        avatar: stringArg()
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.profile.update({
          data: {
            ...args,
          },
          where: {
            id: String(id),
          }
        })
      }
    })

    t.field('createBarber', {
      type: 'Barber',
      args: {
        id: stringArg(),
        barberLocation: nonNull(stringArg()),
        barberName: stringArg(),
        description: stringArg(),
        photos: nonNull(list(nonNull(stringArg()))),
        openOnWeekends: nonNull(booleanArg())
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.barber.create({
          data: {
            ...args,
            user: { connect: { id: String(userId) } },
          }
        })
      }
    })

    t.field('updateBarber', {
      type: 'Barber',
      args: {
        id: stringArg(),
        barberLocation: nonNull(stringArg()),
        barberName: stringArg(),
        description: stringArg(),
        photos: nonNull(list(nonNull(stringArg()))),
        openOnWeekends: nonNull(booleanArg())
      },
      resolve: (_parent, { id, ...args }, context: Context) => {
        const userId = getUserId(context);

        if (!userId) {
          throw new Error('Could not authenticate user.');
        }

        return context.prisma.barber.update({
          data: {
            ...args,
          },
          where: {
            id: String(id),
          }
        })
      }
    })
  },
})
