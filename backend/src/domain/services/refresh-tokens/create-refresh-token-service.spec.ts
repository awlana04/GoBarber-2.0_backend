import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import CreateRefreshTokenService from './create-refresh-token-service';
import RefreshTokenUsecase from '@usecases/implementations/refresh-tokens-usecase';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

type SutOutput = {
  refreshTokensRepository: InMemoryRefreshTokenRepository;
  sut: CreateRefreshTokenService;
};

const makeSut = (): SutOutput => {
  const refreshTokensRepository = new InMemoryRefreshTokenRepository();
  const refreshTokensUsecase = new RefreshTokenUsecase(refreshTokensRepository);
  const sut = new CreateRefreshTokenService(
    refreshTokensRepository,
    refreshTokensUsecase
  );

  return { refreshTokensRepository, sut };
};

describe('Create refresh token service', () => {
  const { refreshTokensRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the rainbow',
  }).value as User;

  const refreshToken = RefreshToken.create({
    expiresIn: Date.UTC(2022, 10) as unknown as Date,
    userId: user.id,
  });

  refreshTokensRepository.user.push(user);
  refreshTokensRepository.refreshToken.push(refreshToken);

  it('should be able to create a new refresh token', async () => {
    const response = await sut.handle({
      id: refreshToken.id,
      expiresIn: Date.UTC(2022, 10) as unknown as Date,
      userId: user.id,
    });

    expect(response).toBeDefined();
  });
});
