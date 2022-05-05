import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import ICheckUserExists from '@usecases/models/barbers/i-check-user-exists-usecase';
import ICheckBarberNameAlreadyExists from '@usecases/models/barbers/i-check-barber-name-already-exists-usecase';

interface ICreateBarberServiceRequest {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
}

export default class CreateBarberService {
  constructor(
    private barberRepository: IBarberRepository,
    private checkUserExists: ICheckUserExists,
    private checkBarberNameAlreadyExists: ICheckBarberNameAlreadyExists
  ) {}

  public async handle({
    name,
    location,
    description,
    images,
    openAtNight,
    openOnWeekends,
    userId,
  }: ICreateBarberServiceRequest): Promise<Barber> {
    await this.checkUserExists.run(userId);
    await this.checkBarberNameAlreadyExists.run(name);

    const barber = Barber.create({
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    }).value as Barber;

    return barber;
  }
}
