import ICheckBarberNameAlreadyExistsUsecase from '../../models/barbers/i-check-barber-name-already-exists-usecase';
import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@domain/entities/modules/barber';

export default class CheckBarberNameAlreadyExistsUsecase
  implements ICheckBarberNameAlreadyExistsUsecase
{
  constructor(private barbersRepository: IBarberRepository) {}

  public async run(name: string): Promise<Barber | null> {
    const checkBarberNameAlreadyExists =
      await this.barbersRepository.findByName(name);

    if (checkBarberNameAlreadyExists) {
      throw new Error('Barber name already taken');
    }

    return null;
  }
}
