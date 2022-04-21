import { Barber } from '@prisma/client';

import AppError from '../../../shared/errors/AppError';

import IBarberRepository from '../repositories/IBarberRepository';

interface IRequest {
  name: string;
  location: string;
  description: string;
  images: Array<string>;
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
}

export default class CreateBarberService {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle({
    name,
    location,
    description,
    images,
    openAtNight,
    openOnWeekends,
    userId,
  }: IRequest): Promise<Barber> {
    const user = await this.barberRepository.findBarberByUserId(userId);

    if (!user) {
      throw new AppError('User does not exists', 404);
    }

    if (user.barber) {
      throw new AppError('User already have a barber account', 406);
    }

    const barberName = await this.barberRepository.findBarberByName(name);

    if (barberName) {
      throw new AppError('Barber name already in user', 406);
    }

    const barber = await this.barberRepository.create({
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    });

    return barber;
  }
}
