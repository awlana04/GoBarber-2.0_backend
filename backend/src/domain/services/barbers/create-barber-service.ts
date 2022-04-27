import Barber from '../../entities/barber';

import IBarberRepository from '../../interfaces/IBarberRepository';

interface ICreateBarberServiceRequest {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
}

export default class CreateBarberService {
  constructor(private readonly barberRepository: IBarberRepository) {}

  public async handle({
    name,
    location,
    description,
    images,
    openAtNight,
    openOnWeekends,
    userId,
  }: ICreateBarberServiceRequest) {
    const checkUserExists = await this.barberRepository.findUserId(userId);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    const checkBarberNameAlreadyExists = await this.barberRepository.findByName(
      name
    );

    if (checkBarberNameAlreadyExists) {
      throw new Error('Barber name already taken');
    }

    const barber = Barber.create({
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    });

    return barber;
  }
}
