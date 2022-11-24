import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class UpdateBarberController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { updateBarberService } = CreateBarberFactory();

    const { id } = request.params;

    const { name, location, description, openAtNight, openOnWeekends } =
      request.body;

    try {
      const barber = await updateBarberService.handle({
        id,
        name,
        location,
        description,
        openAtNight,
        openOnWeekends,
      });

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
