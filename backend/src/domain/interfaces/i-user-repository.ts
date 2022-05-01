import User from '../entities/modules/user';

import IUpdateUserDTO from '../dtos/IUpdateUserDTO';

export default interface IUserRepository {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(id: string, data: IUpdateUserDTO): Promise<User>;
  updateAvatar(id: string, avatar: string): Promise<User>;
  delete(id: string): Promise<User>;
}