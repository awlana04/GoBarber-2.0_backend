import IAppointmentRepository from '../../src/domain/interfaces/IAppointmentRepository';

import User from '../../src/domain/entities/user';
import Barber from '../../src/domain/entities/barber';
import Appointment from '../../src/domain/entities/appointment';

export default class InMemoryAppointmentsRepository
  implements IAppointmentRepository
{
  public user: User[] = [];
  public barber: Barber[] = [];
  public appointment: Appointment[] = [];

  async findById(id: string): Promise<Appointment | null> {
    const appointment = this.appointment.find(
      appointment => appointment.id === id
    );

    if (!appointment) {
      return null;
    }

    return appointment;
  }

  async findUserId(userId: string): Promise<User | null> {
    const user = this.user.find(user => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async findBarberId(barberId: string): Promise<Barber | null> {
    const barber = this.barber.find(barber => barber.id === barberId);

    if (!barber) {
      return null;
    }

    return barber;
  }

  async findByDate(date: Date, barberId: string): Promise<Appointment | null> {
    const appointment = this.appointment.find(
      appointment =>
        appointment.date !== date && appointment.barberId === barberId
    );

    if (!appointment) {
      return null;
    }

    return appointment;
  }

  async update(id: string, date: Date): Promise<Appointment | any> {
    const appointment = await this.findById(id);

    appointment?.props.date.setDate(Number(date));

    return appointment;
  }
}
