import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

interface UpdateUserServiceRequest {
  id: string;
  name?: string;
  password?: string;
  location?: string;
}

export default class UpdateUserService {
  constructor(private usersRepository: IUserRepository) {}

  public async handle({
    id,
    name,
    password,
    location,
  }: UpdateUserServiceRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findById(id);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    const user = await this.usersRepository.update(id, {
      name,
      password,
      location,
    });

    return user;
  }
}
