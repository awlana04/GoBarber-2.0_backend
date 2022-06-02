import IBarberRepository from '@interfaces/i-barber-repository';

import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidDescriptionError from '@shared/errors/invalid-description-error';
import InvalidPropError from '@shared/errors/invalid-prop-error';

import Barber from '@entities/barber';

import IBarberUsecase from '@usecases/models/i-barbers-usecase';

interface IUpdateBarberServiceRequest {
  id: string;
  name?: string;
  location?: string;
  description?: string;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
}

export default class UpdateBarberService {
  constructor(
    private readonly barberRepository: IBarberRepository,
    private readonly barbersUsecase: IBarberUsecase
  ) {}

  public async handle({
    id,
    name,
    location,
    description,
    openAtNight,
    openOnWeekends,
  }: IUpdateBarberServiceRequest): Promise<
    Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
      Barber
    >
  > {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barberOrError: Either<
      InvalidNameError | InvalidDescriptionError | InvalidPropError,
      Barber
    > = Barber.update({
      name,
      description,
      location,
      openAtNight,
      openOnWeekends,
    });

    if (barberOrError.isLeft()) {
      return left(barberOrError.value);
    }

    const barber: Barber = barberOrError.value as Barber;

    await this.barberRepository.update(id, {
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
    });

    return right(barber);
  }
}
