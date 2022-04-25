import User from '../entities/user';

import IUserRepository from '../interfaces/IUserRepository';

interface CreateUserServiceRequest {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
}

export default class CreateUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  public async handle({
    name,
    email,
    password,
    location,
    avatar,
  }: CreateUserServiceRequest) {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('User already exists');
    }

    const user = User.create({ name, email, password, location, avatar });

    return user;
  }
}
