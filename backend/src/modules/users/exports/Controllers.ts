import ViewUserProfileController from '../infra/http/controllers/ViewUserProfileController';
import CreateUserController from '../infra/http/controllers/CreateUserController';
import AuthenticateController from '../infra/http/controllers/AuthenticateController';
import UpdateUserController from '../infra/http/controllers/UpdateUserController';
import UpdateAvatarController from '../infra/http/controllers/UpdateAvatarController';
import DeleteUserController from '../infra/http/controllers/DeleteUserController';

import {
  viewUserProfileService,
  createUserService,
  authenticateService,
  updateUserService,
  updateAvatarService,
  deleteUserService,
} from './Services';

const viewUserProfile = new ViewUserProfileController(viewUserProfileService);

const createUser = new CreateUserController(createUserService);

const authenticate = new AuthenticateController(authenticateService);

const updateUser = new UpdateUserController(updateUserService);

const updateAvatar = new UpdateAvatarController(updateAvatarService);

const deleteUser = new DeleteUserController(deleteUserService);

export {
  viewUserProfile,
  createUser,
  authenticate,
  updateUser,
  updateAvatar,
  deleteUser,
};
