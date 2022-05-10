import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

export default class GetAllBarbersService {
  constructor(
    private barbersRepository: IBarberRepository,
    private barbersUsecase: IBarbersUsecase
  ) {}

  public async handle(userId: string): Promise<Barber[]> {
    await this.barbersUsecase.checkUserExists(userId);

    const barber = await this.barbersRepository.getAllBarbers();

    return barber;
  }
}
