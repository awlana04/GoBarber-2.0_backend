import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class UpdateBarberUserAvatarController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction
  ): Promise<HttpResponse> {
    const { updateBarberUserAvatarService } = CreateBarberFactory();

    const { id } = request.params;

    if (process.env.NODE_ENV === 'test') {
      const { avatar } = request.body;

      try {
        const barber = await updateBarberUserAvatarService.handle({
          id,
          avatar,
        });

        return response.json(barber);
      } catch (error) {
        {
          next(error);
        }
      }
    }

    const avatar = request.file.filename;

    try {
      const barber = await updateBarberUserAvatarService.handle({ id, avatar });

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
