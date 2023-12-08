import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateRatingFactory from '@core/factories/rating-factory';

export default class UpdateRatingController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { updateRatingService } = CreateRatingFactory();

    const { id } = request.params;

    const { stars, comment } = request.body;

    try {
      const rating = await updateRatingService.handle({
        id,
        stars,
        comment,
      });

      return response.json(rating);
    } catch (error) {
      next(error);
    }
  }
}
