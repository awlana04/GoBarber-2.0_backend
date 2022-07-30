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

  return { authenticateUserService, createUserService };
};

export default CreateUserFactory;
