import CreateRefreshTokenService from '../services/CreateRefreshTokenService';

import RefreshTokenRepository from '../infra/prisma/repositories/RefreshTokenRepository';
import RefreshTokenProvider from '../../../shared/providers/implementations/RefreshTokenProvider';

const refreshToken = new RefreshTokenRepository();
const refreshTokenProvider = new RefreshTokenProvider(refreshToken);

const createRefreshTokenService = new CreateRefreshTokenService(
  refreshToken,
  refreshTokenProvider
);

export { createRefreshTokenService };
