import IUserRepository from '@interfaces/i-user-repository';

import IUser from '../interfaces/i-user';

import prisma from '@database/index';

import ICreateUserDTO from '@dtos/i-create-user-dto';
import IUpdateUserDTO from '@dtos/i-update-user-dto';

export default class UserRepository implements IUserRepository {
  public async findById(id: string): Promise<IUser | null> {
    return await prisma.user.findUnique({ where: { id } });
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    return await prisma.user.findUnique({ where: { email } });
  }

  public async save(data: ICreateUserDTO): Promise<IUser> {
    return await prisma.user.create({ data });
  }

  public async update(id: string, data: IUpdateUserDTO): Promise<IUser> {
    return await prisma.user.update({ where: { id }, data });
  }

  public async updateAvatar(id: string, avatar: string): Promise<IUser> {
    return await prisma.user.update({ where: { id }, data: { avatar } });
  }

  public async delete(id: string): Promise<IUser> {
    return await prisma.user.delete({ where: { id } });
  }
}
