import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';
import User from '@entities/user';

import IBarberUsecase from '@usecases/models/i-barbers-usecase';

interface IUpdateBarberUserPasswordServiceRequest {
  id: string;
  userId: string;
  password: string;
}

export default class UpdateBarberUserPassword {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarberUsecase
  ) {}

  public async handle({
    id,
    userId,
    password,
  }: IUpdateBarberUserPasswordServiceRequest): Promise<Barber & User> {
    await this.barbersUsecase.checkUserExists(userId);
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.updatePassword(
      id,
      userId,
      password
    );

    return barber;
  }
}
