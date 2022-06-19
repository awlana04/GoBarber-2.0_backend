import InMemoryRefreshTokenRepository from './in-memory-refresh-tokens-repository';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

describe('In memory refresh tokens repository', () => {
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();

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

  it('should be able to find a refresh token', async () => {
    const response = await refreshTokenRepository.findByRefreshToken(
      refreshToken.id
    );

    expect(response!.id).toEqual(refreshToken.id);
  });

  it('should be able to save a refresh token', async () => {
    const response = await refreshTokenRepository.save({
      expiresIn: Date.UTC(2022, 10) as unknown as Date,
      userId: user.id,
    });

    expect(response).toBeDefined();
  });

  it('should be able to delete a refresh token', async () => {
    const response = await refreshTokenRepository.deletePastRefreshToken(
      user.id
    );

    expect(response).toBeDefined();
  });
});
