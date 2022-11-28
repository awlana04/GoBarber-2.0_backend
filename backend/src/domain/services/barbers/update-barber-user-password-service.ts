import IBarberRepository from '@interfaces/i-barber-repository';
import IBarberUsecase from '@usecases/models/i-barbers-usecase';
import IHashAdapter from '@adapters/models/i-hash-adapter';

import IBarber from '@core/interfaces/i-barber';

interface IUpdateBarberUserPasswordServiceRequest {
  id: string;
  password: string;
}

export default class UpdateBarberUserPassword {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarberUsecase,
    private readonly hashAdapter: IHashAdapter
  ) {}

  public async handle({
    id,
    password,
  }: IUpdateBarberUserPasswordServiceRequest): Promise<IBarber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const hashedPassword = await this.hashAdapter.generateHash(password);

    const barber = await this.barbersRepository.updatePassword(
      id,
      hashedPassword
    );

    return barber;
  }
}
