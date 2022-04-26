import IUserRepository from '../../src/domain/interfaces/IUserRepository';

import User from '../../src/domain/entities/user';
import IUpdateUserDTO from '../../src/domain/dtos/IUpdateUserDTO';

export default class InMemoryUsersRepository implements IUserRepository {
  public item: User[] = [];

  async findById(id: string): Promise<User | null> {
    const user = this.item.find(user => user.id === id);

    if (!user) {
      return null;
    }

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.item.find(user => user.email === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async update(id: string, data: IUpdateUserDTO): Promise<User | any> {
    const user = this.item.find(user => user.id === id);

    if (data.name) {
      return user?.props.name.replace(user.props.name, data.name);
    }

    if (data.password) {
      return user?.props.password.replace(user.props.password, data.password);
    }

    if (data.location) {
      return user?.props.location.replace(user.props.location, data.location);
    }
  }
}
