import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateAppointmentFactory from '@core/factories/appointment-factory';

export default class GetAllAppointmentsController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpNextFunction> {
    const { getAllAppointmentsService } = CreateAppointmentFactory();

    const { id: barberId } = request.params;

    try {
      const appointment = await getAllAppointmentsService.handle(barberId);

      return response.json(appointment);
    } catch (error) {
      next(error);
    }
  }
}
