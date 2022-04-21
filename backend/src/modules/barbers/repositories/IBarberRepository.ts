import { Barber, User } from '@prisma/client';

import ICreateBarberDTO from '../dtos/ICreateBarberDTO';

export default interface IBarberRepository {
  findBarberByUserId(
    id: string
  ): Promise<(User & { barber: Barber }) | undefined>;
  findBarberByName(name: string): Promise<Barber | undefined>;
  create(data: ICreateBarberDTO): Promise<Barber>;
}
