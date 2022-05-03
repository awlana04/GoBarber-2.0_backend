import IRefreshTokenRepository from '@interfaces/i-refresh-token-repository';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

export default class InMemoryRefreshTokenRepository
  implements IRefreshTokenRepository
{
  public user: User[] = [];
  public refreshToken: RefreshToken[] = [];

  async findByRefreshToken(id: string): Promise<RefreshToken | null> {
    const refreshToken = this.refreshToken.find(token => token.id === id);

    if (!refreshToken) {
      return null;
    }

    return refreshToken;
  }
}
