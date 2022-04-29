import User from '../../entities/modules/user';

import IUserRepository from '../../interfaces/IUserRepository';

interface ICreateUserServiceRequest {
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
  }: ICreateUserServiceRequest): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('User already exists');
    }

    if (password.length < 8) {
      throw new Error('Password must have at least 8 characters');
    }

    const user = User.create({ name, email, password, location, avatar })
      .value as User;

    return user;
  }
}
