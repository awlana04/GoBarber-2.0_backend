import { Request, Response } from 'express';

import UpdateUserService from '../../../services/UpdateUserService';

export default class UpdateUserController {
  constructor(private updateUser: UpdateUserService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, password, location } = request.body;
    const { id } = request.params;

    try {
      const user = await this.updateUser.handle({
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
