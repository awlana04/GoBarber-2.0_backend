import IRefreshTokenUsecase from '@usecases/models/i-refresh-tokens-usecase';
import ITokenAdapter from '@adapters/models/i-token-adapter';
import IExpiresInDateAdapter from '@adapters/models/i-expires-in-date-adapter';
import IRefreshTokenProvider from '@domain/providers/models/i-refresh-token-provider';

import IRefreshToken from '@core/interfaces/i-refresh-token';

interface CreateRefreshTokenServiceRequest {
  id: string;
  expiresIn?: number;
  userId?: string;
}

export default class CreateRefreshTokenService {
  constructor(
    private readonly refreshTokensUsecase: IRefreshTokenUsecase,
    private readonly tokenAdapter: ITokenAdapter,
    private readonly expiresInDateAdapter: IExpiresInDateAdapter,
    private readonly refreshTokenProvider: IRefreshTokenProvider
  ) {}

  public async handle({
    id,
    expiresIn,
    userId,
  }: CreateRefreshTokenServiceRequest): Promise<IRefreshToken | string> {
    await this.refreshTokensUsecase.findRefreshToken(id);

    const token = await this.tokenAdapter.createToken(userId);

    const expiredRefreshToken =
      await this.expiresInDateAdapter.checkExpiredRefreshToken(expiresIn);

    if (expiredRefreshToken) {
      return await this.refreshTokenProvider.createRefreshToken(userId);
    }

    return token;
  }
}
