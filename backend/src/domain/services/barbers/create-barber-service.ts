import IBarberRepository from '@interfaces/i-barber-repository';
import IBarberUsecase from '@usecases/models/i-barbers-usecase';

import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidDescriptionError from '@domain/shared/errors/invalid-description-error';
import InvalidPropError from '@shared/errors/invalid-prop-error';

import Barber from '@entities/barber';

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
    Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
      Barber
    >
  > {
    await this.barbersUsecase.checkUserExists(userId);
    await this.barbersUsecase.checkBarberNameAlreadyExists(name);

    const barberOrError: Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
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

    await this.barberRepository.save({
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    });

    return right(barber);
  }
}
