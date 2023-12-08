import IUsersUsecase from '../models/i-users-usecase';
import IUserRepository from '@domain/dtos/interfaces/i-user-repository';

import IUser from '@core/interfaces/i-user';
// import User from '@entities/user';

import AppError from '@shared/app-error';

export default class UsersUsecase implements IUsersUsecase {
  constructor(private usersRepository: IUserRepository) {}

  public async checkUserAlreadyExists(email: string): Promise<IUser | null> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('User already exists');
    }

    return null;
  }

  public async checkUserDoesNotExists(id: string): Promise<IUser | null> {
    const checkUserExists = await this.usersRepository.findById(id);

    if (!checkUserExists) {
      throw new AppError('User does not exists', 404);
    }

    return null;
  }
}
