import ViewUserProfileService from '../services/ViewUserProfileService';
import CreateUserService from '../services/CreateUserService';
import AuthenticateService from '../services/AuthenticateService';
import UpdateUserService from '../services/UpdateUserService';
import UpdateAvatarService from '../services/UpdateAvatarService';
import DeleteUserService from '../services/DeleteUserService';

import { UserRepository } from '../infra/prisma/repositories/UserRepository';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';
import DiskStorageProvider from '../../../shared/providers/implementations/DiskSotrageProvider';
import JWTTokenProvider from '../../../shared/providers/implementations/JWTTokenProvider';
import RefreshTokenRepository from '../../refreshToken/infra/prisma/repositories/RefreshTokenRepository';
import RefreshTokenProvider from '../../../shared/providers/implementations/RefreshTokenProvider';

const usersRepository = new UserRepository();
const hashProvider = new BCryptHashProvider();
const diskStorage = new DiskStorageProvider();
const tokenProvider = new JWTTokenProvider();
const refreshTokenRepositroy = new RefreshTokenRepository();
const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepositroy);

const viewUserProfileService = new ViewUserProfileService(usersRepository);

const createUserService = new CreateUserService(
  usersRepository,
  hashProvider,
  diskStorage,
  tokenProvider,
  refreshTokenProvider
);

const authenticateService = new AuthenticateService(
  usersRepository,
  hashProvider,
  tokenProvider,
  refreshTokenProvider
);

const updateUserService = new UpdateUserService(usersRepository, hashProvider);

const updateAvatarService = new UpdateAvatarService(
  usersRepository,
  diskStorage
);

const deleteUserService = new DeleteUserService(usersRepository, diskStorage);

export {
  viewUserProfileService,
  createUserService,
  authenticateService,
  updateUserService,
  updateAvatarService,
  deleteUserService,
};
