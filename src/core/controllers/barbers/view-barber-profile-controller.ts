import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class ViewBarberProfileController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { viewBarberProfileService } = CreateBarberFactory();

    const { id } = request.params;

    try {
      const barber = await viewBarberProfileService.handle(id);

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
