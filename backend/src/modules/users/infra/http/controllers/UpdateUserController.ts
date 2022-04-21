import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import UpdateUserService from '../../../services/UpdateUserService';

export default class UpdateUserController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, password, location } = request.body;
    const { id } = request.params;

    const userRepository = new UserRepository();
    const updateUser = new UpdateUserService(userRepository);

    try {
      const user = await updateUser.handle({
        id,
        name,
        password,
        location,
      });

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
