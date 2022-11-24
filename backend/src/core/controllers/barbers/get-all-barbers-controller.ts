import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class GetAllBarbersController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { getAllBarbersService } = CreateBarberFactory();

    const { id: userId } = request.params;

    try {
      const barber = await getAllBarbersService.handle(userId);

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
