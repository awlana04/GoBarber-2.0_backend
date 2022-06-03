import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import ICreateUserDTO from '@domain/dtos/i-create-user-dto';
import IUpdateUserDTO from '@domain/dtos/i-update-user-dto';

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
    const user = this.item.find(user => user.email.value === email);

    if (!user) {
      return null;
    }

    return user;
  }

  async save(data: ICreateUserDTO): Promise<User | any> {
    return this.item.push(data as unknown as User);
  }

  async update(id: string, data: IUpdateUserDTO): Promise<User | any> {
    const user = this.item.find(user => user.id === id);

    if (data.name) {
      return user?.name.value.replace(user.name.value, data.name);
    }

    if (data.password) {
      return user?.password.value.replace(user.password.value, data.password);
    }

    if (data.location) {
      return user?.location.value.replace(user.location.value, data.location);
    }
  }

  async updateAvatar(id: string, avatar: string): Promise<User | any> {
    const user = this.item.find(user => user.id === id);

    user?.props.avatar?.replace(user.props.avatar, avatar);

    return user;
  }

  async delete(id: string): Promise<User | any> {
    const user = await this.findById(id);

    this.item.pop();

    return user;
  }
}
