import { objectType } from 'nexus';

import { Context } from '../../context';
import { getUserId } from '../../utils/getUserId';

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      resolve: (_parent, args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.user.findUnique({
          where: {
            id: String(userId),
          }
        })
      }
    })

    t.field('barber', {
      type: 'Barber',
      resolve: (_parent, args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.barber.findUnique({
          where: {
            id: String(userId),
          }
        })
      }
    })

    t.list.field('allBarbers', {
      type: 'Barber',
      resolve: (_parent, _args, context: Context) => {
        return context.prisma.barber.findMany();
      }
    })

    t.field('appointment', {
      type: 'Appointment',
      resolve: (_parent, _args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.appointment.findUnique({
          where: {
            id: String(userId),
          }
        });
      }
    })

    t.list.field('allAppointments', {
      type: 'Appointment',
      resolve: (_parent, _args, context: Context) => {
        const userId = getUserId(context);

        return context.prisma.appointment.findMany({
          where: {
            barber: { id: String(userId) },
          }
        });
      }
    })
  }
})
