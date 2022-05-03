import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import IRefreshTokenProvider from '@domain/providers/models/i-refresh-token-provider';

interface ICreateUserServiceRequest {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
}

export default class CreateUserService {
  constructor(
    private readonly userRepository: IUserRepository,
    private refreshTokenProvider: IRefreshTokenProvider
  ) {}

  public async handle({
    name,
    email,
    password,
    location,
    avatar,
  }: ICreateUserServiceRequest): Promise<User | any> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('User already exists');
    }

    const user = User.create({ name, email, password, location, avatar })
      .value as User;

    const refreshToken = await this.refreshTokenProvider.createRefreshToken(
      user.id
    );

    return { user, refreshToken };
  }
}
