import IUser from '@core/interfaces/i-user';
import IBarber from '@core/interfaces/i-barber';

import ICreateUserDTO from '@dtos/i-create-user-dto';
import IUpdateUserDTO from '@dtos/i-update-user-dto';

export default interface IUserRepository {
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<(IUser & { barber: IBarber }) | null>;
  save(data: ICreateUserDTO): Promise<IUser>;
  update(id: string, data: IUpdateUserDTO): Promise<IUser>;
  updatePassword(id: string, password: string): Promise<IUser>;
  updateAvatar(id: string, avatar: string): Promise<IUser>;
  delete(id: string): Promise<IUser>;
}
