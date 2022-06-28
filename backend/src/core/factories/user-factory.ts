import UserRepository from '@repositories/user-repository';
import UsersUsecase from '@usecases/implementations/users-usecase';
import HashAdapter from '@adapters/implementations/hash-adapter';
import DiskStorageAdapter from '@adapters/implementations/disk-storage-adapter';
import TokenAdapter from '@adapters/implementations/token-adapter';
import RefreshTokenRepository from '@repositories/refresh-token-repository';
import ExpiresInDateAdapter from '@adapters/implementations/expires-in-date-adapter';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';

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
  return new CreateUserService(
    userRepository,
    usersUsecase,
    hashAdapter,
    diskStorageAdapater,
    tokenAdapter,
    refreshTokenProvider
  );
};

export default CreateUserFactory;
