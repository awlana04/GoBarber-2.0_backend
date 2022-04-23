import CreateRefreshTokenController from '../infra/http/controllers/CreateRefreshTokenController';

import { createRefreshTokenService } from './Services';

const createRefreshToken = new CreateRefreshTokenController(
  createRefreshTokenService
);

export { createRefreshToken };
