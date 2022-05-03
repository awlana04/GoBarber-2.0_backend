import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import CreateRefreshTokenService from './create-refresh-token-service';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

type SutOutput = {
  refreshTokenRepository: InMemoryRefreshTokenRepository;
  sut: CreateRefreshTokenService;
};

const makeSut = (): SutOutput => {
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();
  const sut = new CreateRefreshTokenService(refreshTokenRepository);

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
    expiresIn: Date.UTC(2022, 10) as unknown as Date,
    userId: user.id,
  });

  refreshTokenRepository.user.push(user);
  refreshTokenRepository.refreshToken.push(refreshToken);

  it('should NOT be able to create a new refresh token with an invalid id', () => {
    const response = sut.handle({
      id: 'invalidID',
      expiresIn: Date.UTC(2022, 10) as unknown as Date,
      userId: user.id,
    });

    expect(response).rejects.toThrowError();
  });

  it('should be able to create a new refresh token', async () => {
    const response = await sut.handle({
      id: refreshToken.id,
      expiresIn: Date.UTC(2022, 10) as unknown as Date,
      userId: user.id,
    });

    expect(response).toBeDefined();
  });
});
