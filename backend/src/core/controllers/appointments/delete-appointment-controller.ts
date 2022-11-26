import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateAppointmentFactory from '@core/factories/appointment-factory';

export default class DeleteAppointmentController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { deleteAppointmentService } = CreateAppointmentFactory();

    const { id } = request.params;

    try {
      const appointment = await deleteAppointmentService.handle(id);

      return response.json(appointment);
    } catch (error) {
      next(error);
    }
  }
}
