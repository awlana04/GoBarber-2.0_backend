import crypto from 'crypto';

import RefreshToken from './refresh-token';

describe('Refresh token entity', () => {
  const token = crypto.randomUUID();
  const expiresIn = new Date();
  const userId = crypto.randomUUID();

  it('should be able to create a new refresh token', () => {
    const response = RefreshToken.create({
      token,
      expiresIn,
      userId,
    });

    expect(response.props.token).toEqual(token);
    expect(response.props.expiresIn).toEqual(expiresIn);
    expect(response.props.userId).toEqual(userId);

    expect(response).toBeInstanceOf(RefreshToken);
  });
});
