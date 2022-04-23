import { User } from '@prisma/client';

import IUserRepository from '../repositories/IUserRepository';
import IStorageProvider from '../../../shared/providers/models/IStorageProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  avatar: string;
}

export default class UpdateAvatarService {
  constructor(
    private userRepository: IUserRepository,
    private storageProvider: IStorageProvider
  ) {}

  public async handle({ id, avatar }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findById(id);

    if (!checkUserExists) {
      throw new AppError('User does not exists', 404);
    }

    const filename = await this.storageProvider.saveFile(avatar);

    const user = await this.userRepository.updateAvatar(id, filename);

    delete user.password;

    return user;
  }
}
