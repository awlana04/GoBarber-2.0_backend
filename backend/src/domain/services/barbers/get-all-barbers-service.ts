import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

export default class GetAllBarbersService {
  constructor(private barbersRepository: IBarberRepository) {}

  public async handle(userId: string): Promise<Barber[]> {
    const user = await this.barbersRepository.findUserId(userId);

    if (!user) {
      throw new Error('User does not exists');
    }

    const barber = await this.barbersRepository.getAllBarbers();

    return barber;
  }
}
