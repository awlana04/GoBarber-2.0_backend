import { Request, Response } from 'express';

import RefreshTokenRepository from '../../prisma/repositories/RefreshTokenRepository';
import CreateRefreshTokenService from '../../../services/CreateRefreshTokenService';
import RefreshTokenProvider from '../../../../../shared/providers/implemetantions/RefreshTokenProvider';

export default class CreateRefreshTokenController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { refresh_token } = request.body;

    const refreshTokenRepository = new RefreshTokenRepository();
    const refreshTokenProvider = new RefreshTokenProvider(
      refreshTokenRepository
    );
    const createRefreshToken = new CreateRefreshTokenService(
      refreshTokenRepository,
      refreshTokenProvider
    );

    try {
      const refreshToken = await createRefreshToken.handle({
        id: refresh_token,
      });

      return response.status(201).json(refreshToken);
    } catch (error) {
      return response.json(error);
    }
  }
}
