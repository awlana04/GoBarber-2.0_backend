import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import RefreshTokenRepository from '../../../../refreshToken/infra/prisma/repositories/RefreshTokenRepository';
import AuthenticateService from '../../../services/AuthenticateService';
import BCryptHashProvider from '../../../providers/implemetantions/BCryptHashProvider';

export default class AuthenticateController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const hashProvider = new BCryptHashProvider();
    const refreshToken = new RefreshTokenRepository();
    const createAuthentication = new AuthenticateService(
      userRepository,
      hashProvider,
      refreshToken
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
