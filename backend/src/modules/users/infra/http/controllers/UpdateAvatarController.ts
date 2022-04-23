import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import DiskStorageProvider from '../../../../../shared/providers/implemetantions/DiskSotrageProvider';
import UpdateAvatarService from '../../../services/UpdateAvatarService';

export default class UpdateAvatarController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const avatar = request.file.filename;

    const userRepository = new UserRepository();
    const diskStorage = new DiskStorageProvider();
    const updateAvatar = new UpdateAvatarService(userRepository, diskStorage);

    try {
      const user = await updateAvatar.handle({ id, avatar });

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
