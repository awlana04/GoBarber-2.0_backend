import IBarberRepository from '../../src/domain/interfaces/IBarberRepository';

import Barber from '../../src/domain/entities/modules/barber';
import User from '../../src/domain/entities/modules/user';
import IUpdateBarberDTO from '../../src/domain/dtos/IUpdateBarberDTO';

export default class InMemoryBarbersRepository implements IBarberRepository {
  public user: User[] = [];
  public barber: Barber[] = [];

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
    const barber = this.barber.find(barber => barber.name === name);

    if (!barber) {
      return null;
    }

    return barber;
  }

  async update(
    id: string,
    data: {
      name: string;
      location: string;
      description: string;
      openAtNight: boolean;
      openOnWeekends: boolean;
    }
  ): Promise<Barber | any> {
    const barber = await this.findById(id);

    if (data.name) {
      return barber?.props.name.replace(barber.props.name, data.name);
    }

    if (data.location) {
      return barber?.props.location.replace(
        barber.props.location,
        data.location
      );
    }

    if (data.description) {
      return barber?.props.description.replace(
        barber.props.description,
        data.description
      );
    }

    const name = String(barber?.props.name);
    const location = String(barber?.props.location);
    const description = String(barber?.props.description);
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
      );
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
      );
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
      );
    }

    return barber;
  }

  async updatePassword(
    id: string,
    password: string
  ): Promise<(Barber & User) | any> {
    const user = this.user.find(user => user.id === id);

    user?.props.password.value.replace(user.props.password.value, password);

    return user;
  }

  async updateAvatar(
    id: string,
    avatar: string
  ): Promise<(Barber & User) | any> {
    const user = this.user.find(user => user.id === id);

    user?.props.avatar?.replace(user.props.avatar, avatar);

    return user;
  }
}
