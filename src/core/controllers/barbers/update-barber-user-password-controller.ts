import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class UpdateBarberUserPasswordController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { updateBarberUserPasswordService } = CreateBarberFactory();

    const { id } = request.params;

    const { password } = request.body;

    try {
      const barber = await updateBarberUserPasswordService.handle({
        id,
        password,
      });

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
