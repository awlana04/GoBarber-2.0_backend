import UserRepository from '@repositories/user-repository';
import UsersUsecase from '@usecases/implementations/user-usecase';
import HashAdapter from '@adapters/implementations/hash-adapter';
import DiskStorageAdapter from '@adapters/implementations/disk-storage-adapter';
import TokenAdapter from '@adapters/implementations/token-adapter';
import RefreshTokenRepository from '@repositories/refresh-token-repository';
import ExpiresInDateAdapter from '@adapters/implementations/expires-in-date-adapter';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';

import AuthenticateUserService from '@services/users/authenticate-user-service';
import CreateUserService from '@services/users/create-user-service';
import ViewUserProfileService from '@services/users/view-user-profile-service';
import UpdateUserService from '@services/users/update-user-service';
import UpdateUserAvatarService from '@services/users/update-user-avatar-service';

const CreateUserFactory = () => {
  const userRepository = new UserRepository();
  const usersUsecase = new UsersUsecase(userRepository);
  const hashAdapter = new HashAdapter();
  const diskStorageAdapater = new DiskStorageAdapter();
  const tokenAdapter = new TokenAdapter();
  const refreshTokenRepository = new RefreshTokenRepository();
  const expiresInDateAdapter = new ExpiresInDateAdapter();
  const refreshTokenProvider = new RefreshTokenProvider(
    refreshTokenRepository,
    expiresInDateAdapter
  );

  const authenticateUserService = new AuthenticateUserService(
    userRepository,
    hashAdapter,
    tokenAdapter,
    refreshTokenProvider
  );

  const createUserService = new CreateUserService(
    userRepository,
    usersUsecase,
    hashAdapter,
    diskStorageAdapater,
    tokenAdapter,
    refreshTokenProvider
  );

  const viewUserProfileService = new ViewUserProfileService(userRepository);

  const updateUserService = new UpdateUserService(
    userRepository,
    usersUsecase,
    hashAdapter
  );

  const updateUserAvatarService = new UpdateUserAvatarService(
    userRepository,
    usersUsecase
  );

  return {
    authenticateUserService,
    createUserService,
    viewUserProfileService,
    updateUserService,
    updateUserAvatarService,
  };
};

export default CreateUserFactory;
