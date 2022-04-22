import { User } from '@prisma/client';
import { hash } from 'bcryptjs';

import IUserRepository from '../repositories/IUserRepository';
import IHashProvider from '../providers/models/IHashProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  name?: string;
  password?: string;
  location?: string;
}

export default class UpdateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider
  ) {}

  public async handle({
    id,
    name,
    password,
    location,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findById(id);

    if (!checkUserExists) {
      throw new AppError('User does not exists', 404);
    }

    const user = await this.userRepository.update(id, {
      name,
      password,
      location,
    });

    if (password) {
      const hashedPassword = await this.hashProvider.generateHash(password);

      await this.userRepository.updatePassword(id, hashedPassword);

      delete user.password;
    }

    return user;
  }
}
