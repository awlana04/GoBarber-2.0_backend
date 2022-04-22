import { Barber } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id?: string;
  name?: string;
  location?: string;
  description?: string;
  images?: Array<string>;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
}

export default class UpdateBarberService {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle({
    id,
    name,
    location,
    description,
    images,
    openAtNight,
    openOnWeekends,
  }: IRequest): Promise<Barber> {
    const checkBarberExists = await this.barberRepository.findBarberById(id);

    if (!checkBarberExists) {
      throw new AppError('Barber does not exists', 404);
    }

    const barber = await this.barberRepository.updateBarber(id, {
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
    });

    return barber;
  }
}
