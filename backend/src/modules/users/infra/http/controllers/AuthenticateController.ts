import { Request, Response } from 'express';

import AuthenticateService from '../../../services/AuthenticateService';

export default class AuthenticateController {
  constructor(private authenticate: AuthenticateService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { email, password } = request.body;

    try {
      const authenticate = await this.authenticate.handle({
        email,
        password,
      });

      return response.json(authenticate);
    } catch (error) {
      return response.json(error);
    }
  }
}
