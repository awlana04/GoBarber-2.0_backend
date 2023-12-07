import HttpRequest from '@ports/http-request';
import HttpResponse from '@ports/http-response';
import HttpNextFunction from '@ports/http-next-function';

import CreateRatingFactory from '@core/factories/rating-factory';

export default class GetAllRatingsController {
  public async execute(
    request: HttpRequest,
    response: HttpResponse,
    next: HttpNextFunction,
  ): Promise<HttpResponse> {
    const { getAllRatingsService } = CreateRatingFactory();

    const { barberId } = request.params;

    try {
      const rating = await getAllRatingsService.handle(barberId);

      return response.json(rating);
    } catch (error) {
      next(error);
    }
  }
}
