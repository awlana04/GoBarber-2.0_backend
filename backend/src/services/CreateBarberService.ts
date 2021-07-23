import { Request, Response } from 'express';
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
  public async execute({ user_id, name, location, description, open_on_weekends }: BarberRequest, request: Request, response: Response): Promise<Barber> {
    const barberRepository = getRepository(Barber);

    const requestImages = request.files as Express.Multer.File[];

    const images = requestImages.map(image => {
      return { path: image.filename }
    })

    const barber = barberRepository.create({
      user_id,
      name,
      location,
      description,
      // images,
      open_on_weekends
    })

    await barberRepository.save(barber);

    return barber;
  }
}

export default CreateBarberService;
