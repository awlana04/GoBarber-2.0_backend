import { User } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';

import IUserRepository from '../../../repositories/IUserRepository';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';

export class UserRepository implements IUserRepository {
  public async findById(id: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  public async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}
