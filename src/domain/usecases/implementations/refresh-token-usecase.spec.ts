import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import RefreshTokenUsecase from './refresh-token-usecase';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

type SutOutput = {
  refreshTokensRepository: InMemoryRefreshTokenRepository;
  sut: RefreshTokenUsecase;
};

const makeSut = (): SutOutput => {
  const refreshTokensRepository = new InMemoryRefreshTokenRepository();
  const sut = new RefreshTokenUsecase(refreshTokensRepository);

  return { refreshTokensRepository, sut };
};

describe('Refresh token usecase', () => {
  const { refreshTokensRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the rainbow',
  }).value as User;

  const refreshToken = RefreshToken.create({
    expiresIn: Date.UTC(2022, 10) as unknown as number,
    userId: user.id,
  });

  refreshTokensRepository.user.push(user);
  refreshTokensRepository.refreshToken.push(refreshToken);

  it('should not be able to create a new refresh token with an invalid id', () => {
    const response = sut.findRefreshToken('invalidID');

    expect(response).rejects.toThrowError();
  });
});
