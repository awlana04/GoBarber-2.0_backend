import { Request, Response } from 'express';

import RefreshTokenRepository from '../../prisma/repositories/RefreshTokenRepository';
import CreateRefreshTokenService from '../../../services/CreateRefreshTokenService';

export default class CreateRefreshTokenController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { refresh_token } = request.body;

    const refreshTokenRepository = new RefreshTokenRepository();
    const createRefreshToken = new CreateRefreshTokenService(
      refreshTokenRepository
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
