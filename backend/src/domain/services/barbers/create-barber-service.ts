import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';

import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import IBarberUsecase from '@usecases/models/i-barbers-usecase';
import InvalidDescriptionError from '@domain/shared/errors/invalid-description-error';

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
    private readonly barberRepository: IBarberRepository,
    private readonly barbersUsecase: IBarberUsecase
  ) {}

  public async handle({
    name,
    location,
    description,
    images,
    openAtNight,
    openOnWeekends,
    userId,
  }: ICreateBarberServiceRequest): Promise<
    Either<InvalidNameError | InvalidDescriptionError, Barber>
  > {
    await this.barbersUsecase.checkUserExists(userId);
    await this.barbersUsecase.checkBarberNameAlreadyExists(name);

    const barberOrError: Either<
      InvalidNameError | InvalidDescriptionError,
      Barber
    > = Barber.create({
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    });

    const barber: Barber = barberOrError.value as Barber;

    await this.barberRepository.save(barber);

    return right(barber);
  }
}
