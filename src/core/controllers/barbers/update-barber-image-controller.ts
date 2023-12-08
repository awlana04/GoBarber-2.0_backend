// import { Request } from 'express';
import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateBarberFactory from '@core/factories/barber-factory';

export default class updateBarberImageController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { updateBarberImageService } = CreateBarberFactory();

    const { id } = request.params;

    if (process.env.NODE_ENV !== 'test') {
      const requestImages = request.files as unknown as Express.Multer.File[];

      const images = requestImages.map(image => {
        return image.filename;
      });

      try {
        const barber = await updateBarberImageService.handle({
          id,
          images,
        });

        return response.json(barber);
      } catch (error) {
        next(error);
      }
    }

    const { images } = request.body;

    try {
      const barber = await updateBarberImageService.handle({
        id,
        images,
      });

      return response.json(barber);
    } catch (error) {
      next(error);
    }
  }
}
