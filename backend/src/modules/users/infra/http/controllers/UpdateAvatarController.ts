import { Request, Response } from 'express';

import UpdateAvatarService from '../../../services/UpdateAvatarService';

export default class UpdateAvatarController {
  constructor(private updateAvatar: UpdateAvatarService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const avatar = request.file.filename;

    try {
      const user = await this.updateAvatar.handle({ id, avatar });

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
