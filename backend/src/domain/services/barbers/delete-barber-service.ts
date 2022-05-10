import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

export default class DeleteBarberService {
  constructor(
    private barbersRepository: IBarberRepository,
    private barbersUsecase: IBarbersUsecase
  ) {}

  public async handle(id: string): Promise<Barber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.delete(id);

    return barber;
  }
}
