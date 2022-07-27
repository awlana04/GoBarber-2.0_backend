import IBarberRepository from '@interfaces/i-barber-repository';
import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

import IBarber from '@core/interfaces/i-barber';

export default class GetAllBarbersService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase
  ) {}

  public async handle(userId: string): Promise<IBarber[]> {
    await this.barbersUsecase.checkUserExists(userId);

    const barber = await this.barbersRepository.getAllBarbers();

    return barber;
  }
}
