import IBarber from '@core/interfaces/i-barber';
import IUser from '@core/interfaces/i-user';

import ICreateBarberDTO from '@dtos/i-create-barber-dto';
import IUpdateBarberDTO from '@dtos/i-update-barber-dto';

export default interface IBarberRepository {
  findById(id: string): Promise<IBarber | null>;
  findByName(name: string): Promise<IBarber | null>;
  findUserId(userId: string): Promise<(IUser & { barber: IBarber }) | null>;
  getAllBarbers(): Promise<IBarber[]>;
  save(data: ICreateBarberDTO): Promise<IBarber>;
  update(id: string, data: IUpdateBarberDTO): Promise<IBarber>;
  updatePassword(id: string, password: string): Promise<IBarber>;
  updateAvatar(id: string, avatar: string): Promise<IBarber>;
  delete(id: string): Promise<IBarber>;
}
