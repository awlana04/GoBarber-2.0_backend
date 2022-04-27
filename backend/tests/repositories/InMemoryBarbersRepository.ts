import IBarberRepository from '../../src/domain/interfaces/IBarberRepository';

import Barber from '../../src/domain/entities/barber';
import User from '../../src/domain/entities/user';
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

  async update(id: string, data: IUpdateBarberDTO): Promise<Barber | any> {
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

    return barber;
  }
}
