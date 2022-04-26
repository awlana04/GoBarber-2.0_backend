import IUserRepository from '../../src/domain/interfaces/IUserRepository';

import User from '../../src/domain/entities/user';

export default class InMemoryUsersRepository implements IUserRepository {
  public item: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.item.find(user => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }
}
