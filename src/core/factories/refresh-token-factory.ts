import RefreshTokenRepository from '@repositories/refresh-token-repository';
import RefreshTokenUsecase from '@usecases/implementations/refresh-token-usecase';
import TokenAdapter from '@adapters/implementations/token-adapter';
import ExpiresInDateAdapter from '@adapters/implementations/expires-in-date-adapter';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';

import CreateRefreshTokenService from '@services/refresh-tokens/create-refresh-token-service';

const CreateRefreshToken = () => {
  const refreshTokenRepository = new RefreshTokenRepository();
  const refreshTokenUsecase = new RefreshTokenUsecase(refreshTokenRepository);
  const tokenAdapter = new TokenAdapter();
  const expiresInDateAdapter = new ExpiresInDateAdapter();
  const refreshTokenProvider = new RefreshTokenProvider(
    refreshTokenRepository,
    expiresInDateAdapter
  );

  return new CreateRefreshTokenService(
    refreshTokenUsecase,
    tokenAdapter,
    expiresInDateAdapter,
    refreshTokenProvider
  );
};

export default CreateRefreshToken;
