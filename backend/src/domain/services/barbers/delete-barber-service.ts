import IBarberRepository from '@interfaces/i-barber-repository';
import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

import IBarber from '@core/interfaces/i-barber';

export default class DeleteBarberService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase,
  ) {}

  public async handle(id: string): Promise<IBarber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.delete(id);

    return barber;
  }
}
