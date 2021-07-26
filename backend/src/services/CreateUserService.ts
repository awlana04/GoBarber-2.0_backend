import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  type: boolean;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

class CreateUserService {
  public async execute({ type, name, email, password, avatar }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkUserExists = await usersRepository.findOne({
      where: { email }
    });

    if (checkUserExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 10);

    const user = usersRepository.create({
      type,
      name,
      email,
      password: hashedPassword,
      avatar
    })

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
