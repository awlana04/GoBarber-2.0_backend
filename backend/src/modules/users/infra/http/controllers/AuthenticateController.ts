import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import AuthenticateService from '../../../services/AuthenticateService';
import BCryptHashProvider from '../../../providers/implemetantions/BCryptHashProvider';
import JWTTokenProvider from '../../../../../shared/providers/implemetantions/JWTTokenProvider';
import RefreshTokenRepository from '../../../../refreshToken/infra/prisma/repositories/RefreshTokenRepository';
import RefreshTokenProvider from '../../../../../shared/providers/implemetantions/RefreshTokenProvider';

export default class AuthenticateController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const hashProvider = new BCryptHashProvider();
    const tokenProvider = new JWTTokenProvider();
    const refreshTokenRepository = new RefreshTokenRepository();
    const refreshTokenProvider = new RefreshTokenProvider(
      refreshTokenRepository
    );
    const createAuthentication = new AuthenticateService(
      userRepository,
      hashProvider,
      tokenProvider,
      refreshTokenProvider
    );

    try {
      const authenticate = await createAuthentication.handle({
        email,
        password,
      });

      return response.json(authenticate);
    } catch (error) {
      return response.json(error);
    }
  }
}
