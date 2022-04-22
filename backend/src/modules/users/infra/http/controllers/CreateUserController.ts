import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import BCryptHashProvider from '../../../providers/implemetantions/BCryptHashProvider';
import CreateUserService from '../../../services/CreateUserService';

export default class CreateUserController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, email, password, location } = request.body;

    const avatar = request.file.filename;

    const userRepository = new UserRepository();
    const hashedPassword = new BCryptHashProvider();
    const createUser = new CreateUserService(userRepository, hashedPassword);

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
