import { User } from '@prisma/client';

import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  update(id: string, data: IUpdateUserDTO): Promise<User>;
  updatePassword(id: string, password: string): Promise<User>;
  updateAvatar(id: string, avatar: string): Promise<User>;
  delete(id: string): Promise<User>;
}
