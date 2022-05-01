import Barber from '../../entities/modules/barber';

import IBarberRepository from '../../interfaces/IBarberRepository';

export default class ViewBarberProfileService {
  constructor(private barbersRepository: IBarberRepository) {}

  public async handle(id: string): Promise<Barber> {
    const barber = await this.barbersRepository.findById(id);

    if (!barber) {
      throw new Error('Barber does not exists');
    }

    return barber;
  }
}
