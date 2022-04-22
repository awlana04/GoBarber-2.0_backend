import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import DeleteUserService from '../../../services/DeleteUserService';

export default class DeleteUserController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const userRepository = new UserRepository();
    const deleteUser = new DeleteUserService(userRepository);

    try {
      const user = await deleteUser.handle(id);

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
