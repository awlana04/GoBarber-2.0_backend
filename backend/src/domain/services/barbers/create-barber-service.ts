import IBarberRepository from '@interfaces/i-barber-repository';
import IBarberUsecase from '@usecases/models/i-barbers-usecase';

import { Either, left, right } from '@shared/either';

import InvalidNameError from '@errors/invalid-name-error';
import InvalidDescriptionError from '@errors/invalid-description-error';
import InvalidPropError from '@errors/invalid-prop-error';

import IBarber from '@core/interfaces/i-barber';

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
    private readonly barberUsecase: IBarberUsecase
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
      IBarber
    >
  > {
    await this.barberUsecase.checkUserExists(userId);
    await this.barberUsecase.checkBarberNameAlreadyExists(name);

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

    if (barberOrError.isLeft()) {
      return left(barberOrError.value);
    }

    const barber = await this.barberRepository.save({
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
