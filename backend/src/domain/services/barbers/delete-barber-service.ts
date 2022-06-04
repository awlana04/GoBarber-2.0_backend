import IBarberRepository from '@interfaces/i-barber-repository';
import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

import Barber from '@entities/barber';

export default class DeleteBarberService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase
  ) {}

  public async handle(id: string): Promise<Barber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.delete(id);

    return barber;
  }
}
