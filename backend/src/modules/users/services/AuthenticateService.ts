import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

import IUserRepository from '../repositories/IUserRepository';
import ITokenProvider from '../../../shared/providers/models/ITokenProvider';
import IRefreshTokenProvider from '../../../shared/providers/models/IRefreshTokenProvider';
import IHashProvider from '../providers/models/IHashProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

export default class AuthenticateService {
  constructor(
    private userRepository: IUserRepository,
    private hashProvider: IHashProvider,
    private tokenProvider: ITokenProvider,
    private refreshToken: IRefreshTokenProvider
  ) {}

  public async handle({ email, password }: IRequest): Promise<User | any> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password does not match', 406);
    }

    const isValidPassword = await this.hashProvider.compareHash(
      password,
      user.password
    );

    if (!isValidPassword) {
      throw new AppError('Email or password does not match', 406);
    }

    const token = await this.tokenProvider.createToken(user.id);
    const refreshToken = await this.refreshToken.createRefreshToken(user.id);

    delete user.password;

    return { user, token, refreshToken };
  }
}
