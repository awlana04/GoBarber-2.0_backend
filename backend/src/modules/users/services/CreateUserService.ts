import { User } from '@prisma/client';

import IUserRepository from '../repositories/IUserRepository';
import BCryptHashProvider from '../providers/implemetantions/BCryptHashProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
}

export default class CreateUserService {
  constructor(
    private userRepository: IUserRepository // private hashProvider: BCryptHashProvider
  ) {}

  public async handle({
    name,
    email,
    password,
    location,
    avatar,
  }: IRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('User already exists', 406);
    }

    // const hashedPassword = await this.hashProvider.generate(password);

    const user = await this.userRepository.create({
      name,
      email,
      password,
      location,
      avatar,
    });

    return user;
  }
}
