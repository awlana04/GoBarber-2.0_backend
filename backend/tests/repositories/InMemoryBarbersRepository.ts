import IBarberRepository from '../../src/domain/interfaces/IBarberRepository';

import Barber from '../../src/domain/entities/barber';
import User from '../../src/domain/entities/user';

export default class InMemoryBarbersRepository implements IBarberRepository {
  public user: User[] = [];
  public barber: Barber[] = [];

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
}
