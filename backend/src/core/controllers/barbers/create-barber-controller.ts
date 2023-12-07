import { Request } from 'express';

import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class CreateBarberController {
  public async execute(
    request: Request,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { createBarberService } = CreateBarberFactory();

    const { id: userId } = request.params;

    const { name, location, description, openAtNight, openOnWeekends } =
      request.body;

    try {
      const barber = await createBarberService.handle({
        name,
        location,
        description,
        openAtNight,
        openOnWeekends,
        userId,
      });

      return response.status(201).json(barber);
    } catch (error) {
      next(error);
    }
  }
}
