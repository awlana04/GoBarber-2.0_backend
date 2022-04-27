import Barber from '../../entities/barber';

import IBarberRepository from '../../interfaces/IBarberRepository';

interface IUpdateBarberServiceRequest {
  id: string;
  name?: string;
  location?: string;
  description?: string;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
}

export default class UpdateBarberService {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle({
    id,
    name,
    location,
    description,
    openAtNight,
    openOnWeekends,
  }: IUpdateBarberServiceRequest): Promise<Barber> {
    const checkBarberExists = await this.barberRepository.findById(id);

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
    }

    const barber = await this.barberRepository.update(id, {
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
    });

    return barber;
  }
}
