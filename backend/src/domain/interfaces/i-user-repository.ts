import User from '@entities/user';

import ICreateUserDTO from '@dtos/i-create-user-dto';
import IUpdateUserDTO from '@dtos/i-update-user-dto';

export default interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  save(data: ICreateUserDTO): Promise<User>;
  update(id: string, data: IUpdateUserDTO): Promise<User>;
  updateAvatar(id: string, avatar: string): Promise<User>;
  delete(id: string): Promise<User>;
}
