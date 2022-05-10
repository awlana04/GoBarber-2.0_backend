import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import IBarberUsecase from '@usecases/models/i-barbers-usecase';

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
    private barbersUsecase: IBarberUsecase
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
    await this.barbersUsecase.checkUserExists(userId);
    await this.barbersUsecase.checkBarberNameAlreadyExists(name);

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
