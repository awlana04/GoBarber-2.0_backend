import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

export default class DeleteBarberService {
  constructor(private barbersRepository: IBarberRepository) {}

  public async handle(id: string): Promise<Barber> {
    const checkBarberExists = await this.barbersRepository.findById(id);

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
    }

    const barber = await this.barbersRepository.delete(id);

    return barber;
  }
}
