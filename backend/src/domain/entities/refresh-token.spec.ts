import crypto from 'crypto';

import RefreshToken from './refresh-token';

describe('Refresh token entity', () => {
  const expiresIn = new Date();
  const userId = crypto.randomUUID();

  it('should be able to create a new refresh token', () => {
    const response = RefreshToken.create({
      expiresIn,
      userId,
    });

    expect(response.expiresIn).toEqual(expiresIn);
    expect(response.props.userId).toEqual(userId);

    expect(response).toBeInstanceOf(RefreshToken);
  });
});
