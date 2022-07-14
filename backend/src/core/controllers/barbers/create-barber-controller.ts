import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class CreateBarberController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const createBarberFactory = CreateBarberFactory();

    const {
      name,
      location,
      description,
      images,
      openAtNight,
      openOnWeekends,
      userId,
    } = request.body;

    try {
      const barber = await createBarberFactory.handle({
        name,
        location,
        description,
        images,
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
