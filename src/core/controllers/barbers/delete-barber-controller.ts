import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class DeleteBarberController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { deleteBarberService } = CreateBarberFactory();

    const { id } = request.params;

    try {
      const barber = await deleteBarberService.handle(id);

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
