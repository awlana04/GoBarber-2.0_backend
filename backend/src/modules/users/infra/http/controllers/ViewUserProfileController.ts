import { Request, Response } from 'express';

import ViewUserProfileService from '../../../services/ViewUserProfileService';

export default class ViewUserProfileController {
  constructor(private viewUserProfile: ViewUserProfileService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const user = await this.viewUserProfile.handle(id);

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
