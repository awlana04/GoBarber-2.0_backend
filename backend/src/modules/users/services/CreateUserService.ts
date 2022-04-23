import { User } from '@prisma/client';

import IUserRepository from '../repositories/IUserRepository';
import IHashProvider from '../providers/models/IHashProvider';
import IStorageProvider from '../../../shared/providers/models/IStorageProvider';
import ITokenProvider from '../../../shared/providers/models/ITokenProvider';
import IRefreshTokenProvider from '../../../shared/providers/models/IRefreshTokenProvider';

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
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private storageProvider: IStorageProvider,
    private tokenProvider: ITokenProvider,
    private refreshTokenProvider: IRefreshTokenProvider
  ) {}

  public async handle({
    name,
    email,
    password,
    location,
    avatar,
  }: IRequest): Promise<User | any> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('User already exists', 406);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const filename = await this.storageProvider.saveFile(avatar);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
      location,
      avatar: filename,
    });

    const token = await this.tokenProvider.createToken(user.id);
    const refreshToken = await this.refreshTokenProvider.createRefreshToken(
      user.id
    );

    delete user.password;

    return { user, token, refreshToken };
  }
}
