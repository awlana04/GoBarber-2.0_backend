import { User } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';

import IUserRepository from '../../../repositories/IUserRepository';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import IUpdateUserDTO from '../../../dtos/IUpdateUserDTO';

export class UserRepository implements IUserRepository {
  public async findById(id: string): Promise<User> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async findByEmail(email: string): Promise<User> {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    return await prisma.user.create({
      data,
    });
  }

  public async update(id: string, data: IUpdateUserDTO): Promise<User> {
    return await prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  public async updatePassword(id: string, password: string): Promise<User> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
  }

  public async updateAvatar(id: string, avatar: string): Promise<User> {
    return await prisma.user.update({
      where: {
        id,
      },
      data: {
        avatar,
      },
    });
  }
}
