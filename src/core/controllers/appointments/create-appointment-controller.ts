import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateAppointmentFactory from '@core/factories/appointment-factory';

export default class CreateAppointmentController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { createAppointmentService } = CreateAppointmentFactory();

    const { id: barberId } = request.params;

    const { date, userId } = request.body;

    try {
      const appointment = await createAppointmentService.handle({
        date,
        userId,
        barberId,
      });

      return response.status(201).json(appointment);
    } catch (error) {
      next(error);
    }
  }
}
