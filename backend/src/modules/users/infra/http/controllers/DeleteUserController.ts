import { Request, Response } from 'express';

import DeleteUserService from '../../../services/DeleteUserService';

export default class DeleteUserController {
  constructor(private deleteUser: DeleteUserService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.deleteUser.handle(id);

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
