import IUserRepository from '@interfaces/i-user-repository';
import IHastAdapter from '@adapters/models/i-hash-adapter';
import ITokenAdapter from '@adapters/models/i-token-adapter';
import IRefreshTokenProvider from '@domain/providers/models/i-refresh-token-provider';

import AppError from '@shared/app-error';

import IUser from '@core/interfaces/i-user';
import IBarber from '@core/interfaces/i-barber';
import IRefreshToken from '@core/interfaces/i-refresh-token';

interface IAuthenticateUserServiceRequest {
  email: string;
  password: string;
}

export default class AuthenticateUserService {
  constructor(
    private userRepository: IUserRepository,
    private hashAdapter: IHastAdapter,
    private tokenAdapter: ITokenAdapter,
    private refreshTokenProvider: IRefreshTokenProvider,
  ) {}

  public async handle({
    email,
    password,
  }: IAuthenticateUserServiceRequest): Promise<{
    user: IUser;
    token: string;
    refreshToken: IRefreshToken;
    barber: IBarber;
  }> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password does not match', 404);
    }

    if (process.env.NODE_ENV !== 'test') {
      const isValidPassword = await this.hashAdapter.compareHash(
        password,
        user.password,
      );

      if (!isValidPassword) {
        throw new AppError('Email or password does not match', 406);
      }
    }

    const token = await this.tokenAdapter.createToken(user.id);

    const refreshToken = await this.refreshTokenProvider.createRefreshToken(
      user.id,
    );

    const barber = user.barber;

    delete user.password;

    return { user, token, refreshToken, barber };
  }
}
