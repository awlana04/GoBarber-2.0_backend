import { getRepository } from 'typeorm';

import Barber from '../models/Barber';

interface BarberRequest {
  user_id: string;
  name: string;
  location: string;
  description: string;
  open_on_weekends: boolean;
}

class CreateBarberService {
  public async execute({ user_id, name, location, description, open_on_weekends }: BarberRequest): Promise<Barber> {
    const barberRepository = getRepository(Barber);

    const barber = barberRepository.create({
      user_id,
      name,
      location,
      description,
      open_on_weekends
    })

    await barberRepository.save(barber);

    return barber;
  }
}

export default CreateBarberService;
