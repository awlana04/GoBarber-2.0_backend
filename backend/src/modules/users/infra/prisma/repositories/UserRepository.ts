import { User } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';

import IUserRepository from '../../../repositories/IUserRepository';
import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';

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
}
