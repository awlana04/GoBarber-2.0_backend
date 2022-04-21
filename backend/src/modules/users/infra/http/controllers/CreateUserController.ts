import { Request, Response } from 'express';

import CreateUserService from '../../../services/CreateUserService';
import { UserRepository } from '../../prisma/repositories/UserRepository';

export default class CreateUserController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, password, location } = request.body;

    const avatar = request.file.filename;

    const userRepository = new UserRepository();
    const createUser = new CreateUserService(userRepository);

    try {
      const user = await createUser.handle({
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
