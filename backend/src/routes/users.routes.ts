import { Router } from 'express';
import multer from 'multer';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';

const usersRouter = Router();
const upload = multer(uploadConfig);

usersRouter.post('/', upload.single('avatar'), async (request, response) => {
  const { type, name, email, password, avatar } = request.body;

  const createUser = new CreateUserService();

  const user = await createUser.execute({
    type,
    name,
    email,
    password,
    avatar: request.file ? request.file.filename : null
  })

  delete user.password;

  return response.json(user);
})

usersRouter.patch('/avatar', ensureAuthenticated, upload.single('avatar'), async (request, response) => {
  const updateUserAvatar = new UpdateUserAvatarService();

  const user = await updateUserAvatar.execute({
    user_id: request.user.id,
    avatarFilename: request.file.filename
  })

  delete user.password;

  return response.json(user);
})

export default usersRouter;
