import ICheckBarberDoesNotExists from '@domain/usecases/models/barbers/i-check-barber-does-not-exists-usecase';
import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

export default class CheckBarberDoesNotExistsUsecase
  implements ICheckBarberDoesNotExists
{
  constructor(private barbersRepository: IBarberRepository) {}

  public async run(id: string): Promise<Barber | null> {
    const checkBarberExists = await this.barbersRepository.findById(id);

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
    }

    return null;
  }
}
