import IUserRepository from '../repositories/IUserRepository';

import AppError from '../../../shared/errors/AppError';
import { User } from '@prisma/client';

interface IRequest {
  id: string;
  avatar: string;
}

export default class UpdateAvatarService {
  constructor(private userRepository: IUserRepository) {}

  public async handle({ id, avatar }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findById(id);

    if (!checkUserExists) {
      throw new AppError('User does not exists', 404);
    }

    const user = await this.userRepository.updateAvatar(id, avatar);

    return user;
  }
}
