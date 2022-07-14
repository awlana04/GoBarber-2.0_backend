import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import RefreshTokenUsecase from '@usecases/implementations/refresh-tokens-usecase';
import TokenAdapter from '@adapters/implementations/token-adapter';
import ExpiresInDateAdapter from '@adapters/implementations/expires-in-date-adapter';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';
import CreateRefreshTokenService from './create-refresh-token-service';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

type SutOutput = {
  refreshTokenRepository: InMemoryRefreshTokenRepository;
  sut: CreateRefreshTokenService;
};

const makeSut = (): SutOutput => {
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();
  const refreshTokensUsecase = new RefreshTokenUsecase(refreshTokenRepository);
  const tokenAdapter = new TokenAdapter();
  const expiresInDateAdapter = new ExpiresInDateAdapter();
  const refreshTokenProvider = new RefreshTokenProvider(
    refreshTokenRepository,
    expiresInDateAdapter
  );
  const sut = new CreateRefreshTokenService(
    refreshTokensUsecase,
    tokenAdapter,
    expiresInDateAdapter,
    refreshTokenProvider
  );

  return { refreshTokenRepository, sut };
};

describe('Create refresh token service', () => {
  const { refreshTokenRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the rainbow',
  }).value as User;

  const refreshToken = RefreshToken.create({
    expiresIn: Date.UTC(2022, 10),
    userId: user.id,
  });

  refreshTokenRepository.user.push(user);
  refreshTokenRepository.refreshToken.push(refreshToken);

  it('should be able to create a new refresh token', async () => {
    const response = await sut.handle({
      id: refreshToken.id,
    });

    expect(response).toBeDefined();
  });
});
