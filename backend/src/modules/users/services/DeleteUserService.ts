import { User } from '@prisma/client';

import IUserRepository from '../repositories/IUserRepository';
import IStorageProvider from '../../../shared/providers/models/IStorageProvider';

import AppError from '../../../shared/errors/AppError';

export default class DeleteUserService {
  constructor(
    private userRepository: IUserRepository,
    private storageProvider: IStorageProvider
  ) {}

  public async handle(id: string): Promise<User> {
    const user = await this.userRepository.delete(id);

    if (!user) {
      throw new AppError('User does not exists', 404);
    }

    if (user.avatar) {
      await this.storageProvider.deleteFile(user.avatar);
    }

    delete user.password;

    return user;
  }
}
