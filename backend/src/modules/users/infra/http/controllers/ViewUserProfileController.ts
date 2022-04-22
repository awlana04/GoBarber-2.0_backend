import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import ViewUserProfileService from '../../../services/ViewUserProfileService';

export default class ViewUserProfileController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const userRepository = new UserRepository();
    const viewUser = new ViewUserProfileService(userRepository);

    try {
      const user = await viewUser.handle(id);

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
