import IAppointmentRepository from '@domain/dtos/interfaces/i-appointment-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';
import ICreateAppointmentDTO from '@domain/dtos/i-create-appointment-dto';

export default class InMemoryAppointmentsRepository
  implements IAppointmentRepository
{
  public user: User[] = [];
  public barber: Barber[] = [];
  public appointment: Appointment[] = [];

  async findById(id: string): Promise<Appointment | null | any> {
    const appointment = this.appointment.find(
      appointment => appointment.id === id,
    );

    if (!appointment) {
      return null;
    }

    return appointment;
  }

  async findUserId(userId: string): Promise<User | null | any> {
    const user = this.user.find(user => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async findBarberId(barberId: string): Promise<Barber | null | any> {
    const barber = this.barber.find(barber => barber.id === barberId);

    if (!barber) {
      return null;
    }

    return barber;
  }

  async findByDate(
    date: Date,
    barberId: string,
  ): Promise<Appointment | null | any> {
    const appointment = this.appointment.find(
      appointment =>
        (appointment.date as unknown as Date) === date &&
        appointment.barberId.value === barberId,
    );

    if (!appointment) {
      return null;
    }

    return appointment;
  }

  async findAllAppointments(barberId: string): Promise<Appointment[] | any> {
    return this.appointment.find(
      appointment => appointment.barberId.value === barberId,
    );
  }

  async save(data: ICreateAppointmentDTO): Promise<Appointment | any> {
    return this.appointment.push(data as unknown as Appointment);
  }

  async update(id: string, date: Date): Promise<Appointment | any> {
    const appointment = await this.findById(id);

    appointment?.date.value.setDate(date);

    return appointment;
  }

  async delete(id: string): Promise<Appointment | any> {
    const appointment = await this.findById(id);

    this.appointment.pop();

    return appointment;
  }
}
