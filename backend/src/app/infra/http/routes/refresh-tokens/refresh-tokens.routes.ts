import { Router } from 'express';

import CreateRefreshTokenController from '@controllers/refresh-tokens/create-refresh-token-controller';

const refreshTokensRouter = Router();

const createRefreshTokenController = new CreateRefreshTokenController();

refreshTokensRouter.post('/', createRefreshTokenController.execute);

export default refreshTokensRouter;
