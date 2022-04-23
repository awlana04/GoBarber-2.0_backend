import { Request, Response } from 'express';

import { UserRepository } from '../../prisma/repositories/UserRepository';
import BCryptHashProvider from '../../../providers/implemetantions/BCryptHashProvider';
import DiskStorageProvider from '../../../../../shared/providers/implemetantions/DiskSotrageProvider';
import JWTTokenProvider from '../../../../../shared/providers/implemetantions/JWTTokenProvider';
import RefreshTokenRepository from '../../../../refreshToken/infra/prisma/repositories/RefreshTokenRepository';
import RefreshTokenProvider from '../../../../../shared/providers/implemetantions/RefreshTokenProvider';
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
    const diskStorage = new DiskStorageProvider();
    const tokenProvider = new JWTTokenProvider();
    const refreshTokenRepository = new RefreshTokenRepository();
    const refreshToken = new RefreshTokenProvider(refreshTokenRepository);
    const createUser = new CreateUserService(
      userRepository,
      hashedPassword,
      diskStorage,
      tokenProvider,
      refreshToken
    );

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
