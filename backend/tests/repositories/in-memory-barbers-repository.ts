import IBarberRepository from '@interfaces/i-barber-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

import ICreateBarberDTO from '@domain/dtos/i-create-barber-dto';
import IUpdateBarberDTO from '@domain/dtos/i-update-barber-dto';

export default class InMemoryBarbersRepository implements IBarberRepository {
  public user: User[] = [];
  public barber: Barber[] = [];
  public appointment: Appointment[] = [];

  async findById(id: string): Promise<Barber | null> {
    const barber = this.barber.find(barber => barber.id === id);

    if (!barber) {
      return null;
    }

    return barber;
  }

  async findUserId(userId: string): Promise<User | null> {
    const user = this.user.find(user => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  async findByName(name: string): Promise<Barber | null> {
    const barber = this.barber.find(barber => barber.name.value === name);

    if (!barber) {
      return null;
    }

    return barber;
  }

  async getAllBarbers(): Promise<Barber[]> {
    return this.barber;
  }

  async save(barber: ICreateBarberDTO): Promise<Barber | any> {
    return this.barber.push(barber as unknown as Barber);
  }

  async update(id: string, data: IUpdateBarberDTO): Promise<Barber | any> {
    const barber = await this.findById(id);

    if (data.name) {
      return barber?.name.value.replace(barber.name.value, data.name);
    }

    if (data.location) {
      return barber?.location.value.replace(
        barber.location.value,
        data.location
      );
    }

    if (data.description) {
      return barber?.description.value.replace(
        barber?.description.value,
        data.description
      );
    }

    const name = String(barber?.name.value);
    const location = String(barber?.props.location);
    const description = String(barber?.description.value);
    const openAtNight = Boolean(barber?.props.openAtNight);
    const openOnWeekends = Boolean(barber?.props.openOnWeekends);
    const userId = String(barber?.props.userId);

    if (data.openAtNight !== undefined && data.openOnWeekends === undefined) {
      this.barber.pop();

      return Barber.create(
        {
          name,
          location,
          description,
          openAtNight: data.openAtNight,
          openOnWeekends,
          userId,
        },
        id
      ).value as Barber;
    }

    if (data.openOnWeekends !== undefined && data.openAtNight === undefined) {
      this.barber.pop();

      return Barber.create(
        {
          name,
          location,
          description,
          openAtNight,
          openOnWeekends: data.openOnWeekends,
          userId,
        },
        id
      ).value as Barber;
    }

    if (data.openAtNight !== undefined && data.openOnWeekends !== undefined) {
      this.barber.pop();

      return Barber.create(
        {
          name,
          location,
          description,
          openAtNight: data.openAtNight,
          openOnWeekends: data.openOnWeekends,
          userId,
        },
        id
      ).value as Barber;
    }

    return barber;
  }

  async updatePassword(
    id: string,
    userId: string,
    password: string
  ): Promise<(Barber & User) | any> {
    await this.findById(id);
    const user = await this.findUserId(userId);

    user?.password.value.replace(user.password.value, password);

    return user;
  }

  async updateAvatar(
    id: string,
    userId: string,
    avatar: string
  ): Promise<(Barber & User) | any> {
    await this.findById(id);
    const user = await this.findUserId(userId);

    user?.props.avatar?.replace(user.props.avatar, avatar);

    return user;
  }

  async delete(id: string): Promise<Barber | any> {
    const barber = await this.findById(id);

    this.barber.pop();
    this.user.pop();

    return barber;
  }

  async deleteBarberAndAppointments(
    id: string
  ): Promise<Barber | Appointment | any> {
    const barber = await this.findById(id);

    this.appointment.pop();
    this.barber.pop();
    this.user.pop();

    return barber;
  }
}
