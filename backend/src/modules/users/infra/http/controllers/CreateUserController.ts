import { Request, Response } from 'express';

import CreateUserService from '../../../services/CreateUserService';

export default class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, password, location } = request.body;

    const avatar = request.file.filename;

    try {
      const user = await this.createUser.handle({
        name,
        email,
        password,
        location,
        avatar,
      });

      return response.status(201).json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
