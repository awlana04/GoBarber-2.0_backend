import { User } from '@prisma/client';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import IUserRepository from '../repositories/IUserRepository';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  email: string;
  password: string;
}

export default class AuthenticateService {
  constructor(private userRepository: IUserRepository) {}

  public async handle({ email, password }: IRequest): Promise<User & any> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password does not match', 406);
    }

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) {
      throw new AppError('Email or password does not match', 406);
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: '15m',
    });

    delete user.password;

    return { user, token };
  }
}
