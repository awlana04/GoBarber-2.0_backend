import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';

import IBarberUsecase from '@usecases/models/i-barbers-usecase';

interface IUpdateBarberServiceRequest {
  id: string;
  name?: string;
  location?: string;
  description?: string;
  openAtNight?: boolean;
  openOnWeekends?: boolean;
}

export default class UpdateBarberService {
  constructor(
    private barberRepository: IBarberRepository,
    private barbersUsecase: IBarberUsecase
  ) {}

  public async handle({
    id,
    name,
    location,
    description,
    openAtNight,
    openOnWeekends,
  }: IUpdateBarberServiceRequest): Promise<Barber> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

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
