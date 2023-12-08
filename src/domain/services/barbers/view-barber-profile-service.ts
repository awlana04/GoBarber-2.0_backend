import IBarberRepository from '@interfaces/i-barber-repository';

import IBarber from '@core/interfaces/i-barber';

export default class ViewBarberProfileService {
  constructor(private readonly barbersRepository: IBarberRepository) {}

  public async handle(id: string): Promise<IBarber> {
    const barber = await this.barbersRepository.findById(id);

    if (!barber) {
      throw new Error('Barber does not exists');
    }

    return barber;
  }
}
