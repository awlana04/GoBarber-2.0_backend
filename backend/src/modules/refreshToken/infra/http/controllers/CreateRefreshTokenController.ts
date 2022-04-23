import { Request, Response } from 'express';

import CreateRefreshTokenService from '../../../services/CreateRefreshTokenService';

export default class CreateRefreshTokenController {
  constructor(private createRefreshToken: CreateRefreshTokenService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { refresh_token } = request.body;

    try {
      const refreshToken = await this.createRefreshToken.handle({
        id: refresh_token,
      });

      return response.status(201).json(refreshToken);
    } catch (error) {
      return response.json(error);
    }
  }
}
