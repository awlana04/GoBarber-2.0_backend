import { User, Barber } from '@prisma/client';

import ICreateBarberDTO from '../dtos/ICreateBarberDTO';
import IUpdateBarberDTO from '../dtos/IUpdateBarberDTO';

export default interface IBarberRepository {
  findBarberByUserId(
    id: string
  ): Promise<(User & { barber: Barber }) | undefined>;
  findBarberById(id: string): Promise<Barber | undefined>;
  findBarberByName(name: string): Promise<Barber | undefined>;
  findAllBarbers(): Promise<Barber[] & any>;
  create(data: ICreateBarberDTO): Promise<Barber>;
  updateBarber(barberId: string, data: IUpdateBarberDTO): Promise<Barber>;
  updateBarberPassword(
    barberId: string,
    password: string
  ): Promise<Barber & { user: User }>;
  updateBarberAvatar(
    barberId: string,
    avatar: string
  ): Promise<Barber & { user: User }>;
}
