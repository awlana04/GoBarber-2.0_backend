import { User } from '@prisma/client';

import IUserRepository from '../repositories/IUserRepository';

import AppError from '../../../shared/errors/AppError';

export default class ViewUserProfileService {
  constructor(private userRepository: IUserRepository) {}

  public async handle(id: string): Promise<User> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User does not exists', 404);
    }

    delete user.password;

    return user;
  }
}
