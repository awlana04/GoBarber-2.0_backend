import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateAppointmentFactory from '@core/factories/appointment-factory';

export default class UpdateAppointmentController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { updateAppointmentService } = CreateAppointmentFactory();

    const { id } = request.params;

    const { date } = request.body;

    try {
      const appointment = await updateAppointmentService.handle({ id, date });

      return response.json(appointment);
    } catch (error) {
      next(error);
    }
  }
}
