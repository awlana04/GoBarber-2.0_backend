import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

export default class ViewBarberProfileService {
  constructor(private readonly barbersRepository: IBarberRepository) {}

  public async handle(id: string): Promise<Barber> {
    const barber = await this.barbersRepository.findById(id);

    if (!barber) {
      throw new Error('Barber does not exists');
    }

    return barber;
  }
}
