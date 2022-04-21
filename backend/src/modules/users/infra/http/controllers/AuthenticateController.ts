import { Request, Response } from 'express';

import AuthenticateService from '../../../services/AuthenticateService';
import { UserRepository } from '../../prisma/repositories/UserRepository';

export default class AuthenticateController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    const userRepository = new UserRepository();
    const createAuthentication = new AuthenticateService(userRepository);

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
