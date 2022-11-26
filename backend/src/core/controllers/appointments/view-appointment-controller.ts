import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateAppointmentFactory from '@core/factories/appointment-factory';

export default class ViewAppointmentController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { viewAppointmentService } = CreateAppointmentFactory();

    const { id } = request.params;

    try {
      const appointment = await viewAppointmentService.handle(id);

      return response.json(appointment);
    } catch (error) {
      next(error);
    }
  }
}
