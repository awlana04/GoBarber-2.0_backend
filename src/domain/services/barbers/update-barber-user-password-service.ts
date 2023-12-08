import IBarberRepository from '@interfaces/i-barber-repository';
import IBarberUsecase from '@usecases/models/i-barbers-usecase';
import IHashAdapter from '@adapters/models/i-hash-adapter';

import { Either, left, right } from '@shared/either';

import InvalidPasswordError from '@errors/invalid-password-error';

import IBarber from '@core/interfaces/i-barber';

import Barber from '@entities/barber';

interface IUpdateBarberUserPasswordServiceRequest {
  id: string;
  password: string;
}

export default class UpdateBarberUserPassword {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarberUsecase,
    private readonly hashAdapter: IHashAdapter,
  ) {}

  public async handle({
    id,
    password,
  }: IUpdateBarberUserPasswordServiceRequest): Promise<
    Either<InvalidPasswordError, IBarber>
  > {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barberOrError: Either<InvalidPasswordError, Barber> =
      Barber.updatePassword({ password });

    if (barberOrError.isLeft()) {
      return left(barberOrError.value);
    }

    const hashedPassword = await this.hashAdapter.generateHash(password);

    const barber = await this.barbersRepository.updatePassword(
      id,
      hashedPassword,
    );

    return right(barber);
  }
}
