import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateRatingFactory from '@core/factories/rating-factory';

export default class CreateRatingController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { createRatingService } = CreateRatingFactory();

    const { stars, comment, userId, barberId } = request.body;

    try {
      const rating = await createRatingService.handle({
        stars,
        comment,
        userId,
        barberId,
      });

      return response.status(201).json(rating);
    } catch (error) {
      next(error);
    }
  }
}
